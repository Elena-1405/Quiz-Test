import React, { useState } from 'react';
import  { ResultProps, GameProps} from './interfaces/interfaces';
import { test } from './mock/test';



const Result: React.FC<ResultProps> = ({ correct, total }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result' />
      <h2>Вы отгадали {correct} ответа из {total}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}



const Game: React.FC<GameProps> = ({ question, step, totalSteps, onClickVariant }) => {
  const percentage = Math.round((step / totalSteps) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.questionText}</h1>
      <ul>
        {question.options && question.options.map((text, index) =>
          <li onClick={() => onClickVariant(index)} key={index}>{text}</li>
        )}
      </ul>
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