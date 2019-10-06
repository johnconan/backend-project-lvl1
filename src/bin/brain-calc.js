#!/usr/bin/env node
import gameInit from '..';
import { generateNumber, generateOperator } from '../utilities';

const rules = 'What is the result of the expression?';

const game = () => {
  const randomNum1 = generateNumber(1, 20);
  const randomNum2 = generateNumber(1, 20);
  const randomOperator = generateOperator();
  const question = `${randomNum1}${randomOperator}${randomNum2}`;
  let correctAnswer;

  switch (randomOperator) {
    case '-':
      correctAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    default:
      correctAnswer = 'Unknown';
  }
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

gameInit(rules, game);
