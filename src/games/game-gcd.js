import gameInit from '..';
import generateNumber from '../utilities';

const description = 'Find the greatest common divisor of given numbers';

const greatestDivisor = (num1, num2) => {
  const isLargestNumber = num1 > num2 ? num1 : num2;
  const iter = (counter) => {
    if (counter === 1) return counter;
    const isGreaterDivisor = num1 % counter === 0 && num2 % counter === 0;
    return isGreaterDivisor ? counter : iter(counter - 1);
  };
  return iter(isLargestNumber);
};

const startTheGcdGame = () => {
  const randomNumber1 = generateNumber(1, 20);
  const randomNumber2 = generateNumber(1, 20);
  const question = `${randomNumber1}, ${randomNumber2}`;
  const correctAnswer = String(greatestDivisor(randomNumber1, randomNumber2));
  return {
    question,
    correctAnswer,
  };
};

export default () => gameInit(description, startTheGcdGame);
