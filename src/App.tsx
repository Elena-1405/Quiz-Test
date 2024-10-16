import React, { useState } from 'react';
import  { ResultProps, GameProps} from './interfaces/interfaces';
import { test } from './mock/test';
import { Result } from './components/result/result';
import { Start } from './components/start/start';
import { SingleChoiceQuestion } from './components/singleChoiceQuestion/singleChoiceQuestion';


const Game: React.FC<GameProps> = ({ question, step, totalSteps, onClickVariant }) => {
  const percentage = Math.round((step / totalSteps) * 100);

  return (
    <>
      <h1>{test.title}</h1>
      <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
        <Start />
        <SingleChoiceQuestion question={question} step={0} totalSteps={0} onClickVariant={(id: number) => void {
        throw: new Error('Function not implemented.'),
      } }  />
        <Result correct={0} total={0} />
    </>
  );
}

const App: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question = test.questions[step];

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (typeof question.correct === 'number' && index === question.correct) {
      setCorrect(correct + 1);
    }

    if (Array.isArray(question.correct) && question.correct.includes(index)) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {step !== test.questions.length ? (
        <Game 
          question={question} 
          step={step} 
          totalSteps={test.questions.length} 
          onClickVariant={onClickVariant} 
        />
      ) : (
        <Result correct={correct} total={test.questions.length} />
      )}
    </div>
  );
}

export default App;