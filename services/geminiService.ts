
import { GoogleGenAI } from "@google/genai";
import { QuizQuestion } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PROMPT = `
You are an expert TOEIC test creator.
Your task is to generate a single, high-quality, multiple-choice question for a TOEIC Part 5 practice test.
The question must specifically test the user's ability to choose the correct NOUN from a set of similar words (e.g., verb form, adjective form, related but incorrect noun).

Please follow these rules strictly:
1.  The question must be a single sentence with a blank, represented by "____".
2.  Provide four answer choices, labeled A, B, C, and D.
3.  One choice must be the correct noun. The other choices should be common distractors (e.g., the verb form, adjective form, or a different noun).
4.  Indicate the correct answer key (A, B, C, or D).
5.  Provide a concise explanation for why the correct answer is right and the others are wrong.

Return the response ONLY in JSON format. Do not include any other text or markdown. The JSON object must have the following structure:
{
  "question": "The primary ____ for the delay in the project was the unexpected shortage of raw materials.",
  "options": {
    "A": "reasoning",
    "B": "reasonable",
    "C": "reason",
    "D": "reasoned"
  },
  "answer": "C",
  "explanation": "The sentence requires a noun to serve as the subject's complement. 'Reason' is the correct noun. 'Reasoning' is a gerund or noun but refers to the process of thinking, which doesn't fit the context. 'Reasonable' is an adjective. 'Reasoned' is a verb (past tense)."
}
`;


export const generateQuizQuestion = async (): Promise<QuizQuestion> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: PROMPT,
      config: {
        responseMimeType: "application/json",
        temperature: 1.1,
        topP: 0.95,
      },
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }

    const parsedData = JSON.parse(jsonStr) as QuizQuestion;

    // Basic validation
    if (
      !parsedData.question ||
      !parsedData.options ||
      !parsedData.answer ||
      !parsedData.explanation
    ) {
      throw new Error("Generated data is missing required fields.");
    }
    
    return parsedData;
  } catch (error) {
    console.error("Failed to generate quiz question:", error);
    throw new Error("AI 문제 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
};
