import gameInit from '..';
import generateNumber from '../utilities';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (count) => {
    if (num === count) return true;
    if (num % count === 0) return false;
    return iter(count + 1);
  };
  return iter(2);
};

const startThePrimeGame = () => {
  const question = generateNumber(2, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};
export default () => gameInit(description, startThePrimeGame);
