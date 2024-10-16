export interface QuestionProps {
    id: number;
    options?: string[];
    questionText: string;
    type: QuestionType;
    answer?: string | string[]; 
    correct?: number | number[];
  }
  
  export interface Test {
    id: number;
    title: string;
    timeLimit: number;
    questions: QuestionProps[];
  }

  export interface ResultProps {
    correct: number;
    total: number;
  }

  export interface GameProps {
    question: QuestionProps;
    step: number;
    totalSteps: number;
    onClickVariant: (id: number) => void;
  }
  
  export type QuestionType = 'singleChoice' | 'multipleChoice' | 'shortAnswer' | 'longAnswer';