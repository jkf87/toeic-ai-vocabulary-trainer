
export interface IncorrectAnswer {
  id: number;
  category: string;
  problem: string;
  myAnswer: string;
  correctAnswer: string;
  explanation: string;
  keyPoint: string;
}

export type QuizOptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuizQuestion {
  question: string;
  options: {
    [key in QuizOptionKey]: string;
  };
  answer: QuizOptionKey;
  explanation: string;
}

export interface WordbookEntry {
  id: string;
  word: string;
}
