import React from "react";
import { ResultProps } from "../../interfaces/interfaces";


export const Result: React.FC<ResultProps> = ({ correct, total }) => {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result' />
        <h2>Вы ответили на {correct} вопросов из {total}</h2>
        <a href='/'>
          <button>Попробовать снова</button>
        </a>
      </div>
    );
  }