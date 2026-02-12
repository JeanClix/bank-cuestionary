
export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  questionText: string;
  options: Option[];
  hint: string;
  explanation: string;
  type: 'single' | 'multiple';
  category?: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export enum AppView {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  BANK = 'BANK',
  LOADING = 'LOADING',
  RESULTS = 'RESULTS'
}
