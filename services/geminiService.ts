/// <reference types="vite/client" />

import { QuizQuestion } from '../types';

export const generateQuizQuestion = async (): Promise<QuizQuestion> => {
  try {
    const response = await fetch('/.netlify/functions/generate-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    // Basic validation
    if (
      !data.question ||
      !data.options ||
      !data.answer ||
      !data.explanation
    ) {
      throw new Error("Generated data is missing required fields.");
    }
    
    return data as QuizQuestion;
  } catch (error) {
    console.error("Failed to generate quiz question:", error);
    throw new Error("AI 문제 생성에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
};
