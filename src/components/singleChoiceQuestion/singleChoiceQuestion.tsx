import { GameProps, QuestionProps } from '../../interfaces/interfaces';
import { test } from '../../mock/test';

export const SingleChoiceQuestion: React.FC<GameProps> = ({ question }) => {
  return (
    <div className='questions'>
      <h2>Вопрос {question.id} из {test.questions.length}: </h2>
      <h3>{question.questionText}</h3>
      <div className='items'> 
        {question.options && question.options.map((option: string, index: number) => (
          <div>
            <input 
              type="radio" 
              name={`question-${question.id}`} 
              id={`option-${index}`} 
              value={index}
            /> 
            <label key={index} htmlFor={`option-${index}`} className="box">
              <div className="item"> 
                <span className="circle" /> 
                <span className="subject">{option}</span></div></label>
              </div>
        ))}
      </div>
    </div>
  );
};
