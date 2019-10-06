import gameInit from '..';
import { generateNumber, isEven } from '../utilities';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const question = generateNumber(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => gameInit(rules, game);
