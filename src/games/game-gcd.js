import gameInit from '..';
import generateNumber from '../utilities';

const description = 'Find the greatest common divisor of given numbers';

const getGcd = (num1, num2) => {
  const greatestParam = num1 > num2 ? num1 : num2;
  const iter = (counter) => {
    if (counter === 1) return counter;
    const isGreaterDivisor = num1 % counter === 0 && num2 % counter === 0;
    return isGreaterDivisor ? counter : iter(counter - 1);
  };
  return iter(greatestParam);
};

const generateDataGame = () => {
  const x = generateNumber(1, 20);
  const y = generateNumber(1, 20);
  const question = `${x}, ${y}`;
  const correctAnswer = String(getGcd(x, y));
  return {
    question,
    correctAnswer,
  };
};

export default () => gameInit(description, generateDataGame);
