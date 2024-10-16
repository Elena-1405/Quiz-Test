import { useState } from "react";
import { SingleChoiceQuestion } from "../singleChoiceQuestion/singleChoiceQuestion";
import { test } from '../../mock/test';
import { QuestionsProps } from "../../interfaces/interfaces";


export const Questions:React.FC<QuestionsProps> = ({ answer, setAnswer}) => {
    const [step, setStep] = useState(0);
    const [show, setShow] = useState(true);

    const totalSteps = test.questions.length;
    const percentage = Math.round((step / totalSteps) * 100);

    const handleNext = () => {
        if (step < totalSteps - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleSubmit = () => {
        // Логика обработки завершения теста
        setShow(false);
    };

    return (
        <div className='container'>
            <div>
                <div className='test-text'>Test</div>
                <div className='timer'>Timer</div>
                <div className="progress">
                    <div 
                        style={{ width: `${percentage}%` }} 
                        className="progress-inner"
                    ></div>
                </div>
            </div>
            <SingleChoiceQuestion 
                question={test.questions[step]} 
                step={step} 
                totalSteps={totalSteps} 
                onClickVariant={(id: number) => setAnswer(id)}  
            />
            <div className='buttons'>
                <button 
                    className='button-prev' 
                    onClick={handlePrev}
                    disabled={step === 0}
                >
                    Prev
                </button>
                <button 
                    className='button-next' 
                    onClick={handleNext}
                    disabled={step === totalSteps - 1}
                >
                    Next
                </button>
                <button 
                    className='button-submit' 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};