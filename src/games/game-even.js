import gameInit from '..';
import generateNumber from '../utilities';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateDataGame = () => {
  const question = generateNumber(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => gameInit(description, generateDataGame);
