import { Test } from "../interfaces/interfaces";

export const test: Test = {
    id: 1,
    title: "Пример теста",
    timeLimit: 120,
    questions: [
      {
        id: 1,
        type: 'singleChoice',
        questionText: 'React - это ... ?',
        options: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
      },
      {
        id:2,
        type: 'singleChoice',
        questionText: 'Компонент - это ... ',
        options: ['приложение', 'часть приложения или страницы', 'то, что мы не знаем, что это такое'],
        correct: 1,
      },
      {
        id: 3,
        type: 'shortAnswer',
        questionText: 'Что такое JSX?',
        options: [
          'Это простой HTML',
          'Это функция',
          'Это расширение синтаксиса JS',
        ],
        correct: 2,
      },
    ],
  };
  