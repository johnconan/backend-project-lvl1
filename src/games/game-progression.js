import gameInit from '..';
import { generateNumber } from '../utilities';

const rules = 'What number is missing in the progression?';

const countNumbers = 10;

const game = () => {
  const randomStep = generateNumber(2, 10);
  const randomDots = generateNumber(1, 10);
  const start = generateNumber(1, 50);
  let question = '';
  for (let i = 1; i <= countNumbers; i += 1) {
    if (i === randomDots) {
      question += '.. ';
    } else {
      question += `${start + randomStep * i} `;
    }
  }
  const correctAnswer = start + randomStep * randomDots;
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => gameInit(rules, game);
