import gameInit from '..';
import generateNumber from '../utilities';

const description = 'Find the greatest common divisor of given numbers';

const getGreatestDivisor = (num1, num2) => {
  const selectLargestNum = num1 > num2 ? num1 : num2;
  const iter = (counter) => {
    if (counter === 1) return counter;
    const isGreaterDivisor = num1 % counter === 0 && num2 % counter === 0;
    return isGreaterDivisor ? counter : iter(counter - 1);
  };
  return iter(selectLargestNum);
};

const generateDataGame = () => {
  const x = generateNumber(1, 20);
  const y = generateNumber(1, 20);
  const question = `${x}, ${y}`;
  const correctAnswer = String(getGreatestDivisor(x, y));
  return {
    question,
    correctAnswer,
  };
};

export default () => gameInit(description, generateDataGame);
