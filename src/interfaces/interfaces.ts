export interface Question {
    id: number;
    variants?: string | string[];
    questionText: string;
    type: QuestionType;
    options?: string[];
    answer?: string | string[]; 
    correct?: number | number[];
  }
  
  export interface Test {
    id: number;
    title: string;
    timeLimit: number;
    questions: Question[];
  }

  export interface ResultProps {
    correct: number;
    total: number;
  }

  export interface GameProps {
    question: Question;
    step: number;
    totalSteps: number;
    onClickVariant: (index: number) => void;
  }
  
  export type QuestionType = 'singleChoice' | 'multipleChoice' | 'shortAnswer' | 'longAnswer';