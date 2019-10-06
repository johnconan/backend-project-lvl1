import gameInit from '..';
import { isPrime, generateNumber } from '../utilities';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const question = generateNumber(2, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};
export default () => gameInit(rules, game);
