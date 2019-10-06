#!/usr/bin/env node
import gameInit from '..';
import { generateNumber, greatestDivisor } from '../utilities';

const rules = 'Find the greatest common divisor of given numbers';

const game = () => {
  const randomNumber1 = generateNumber(1, 20);
  const randomNumber2 = generateNumber(1, 20);
  const question = `${randomNumber1}, ${randomNumber2}`;
  const correctAnswer = String(greatestDivisor(randomNumber1, randomNumber2));
  return {
    question,
    correctAnswer,
  };
};

gameInit(rules, game);
