import gameInit from '..';
import generateNumber from '../utilities';

const description = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const generateDataGame = () => {
  const x = generateNumber(1, 20);
  const y = generateNumber(1, 20);
  const operation = generateNumber(0, operations.length - 1);

  const question = `${x}${operation}${y}`;
  let correctAnswer;

  switch (operation) {
    case '-':
      correctAnswer = x - y;
      break;
    case '*':
      correctAnswer = x * y;
      break;
    case '+':
      correctAnswer = x + y;
      break;
    default:
      return false;
  }
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => gameInit(description, generateDataGame);
