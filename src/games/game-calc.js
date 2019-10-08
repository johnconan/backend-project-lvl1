import gameInit from '..';
import generateNumber from '../utilities';

const description = 'What is the result of the expression?';

const generateOperator = () => {
  const opArr = ['*', '-', '+'];
  const random = Math.floor(Math.random() * opArr.length);
  return opArr[random];
};

const startTheCalcGame = () => {
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
      return false;
  }
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => gameInit(description, startTheCalcGame);
