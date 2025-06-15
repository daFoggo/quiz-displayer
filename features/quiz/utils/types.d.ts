export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  isCompleted: boolean;
  score: number;
  showResults: boolean;
  timeStarted: number;
}
