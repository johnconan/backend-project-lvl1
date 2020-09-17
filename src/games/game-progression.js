import gameInit from '..';
import generateNumber from '../utilities';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateDataGame = () => {
  const step = generateNumber(2, 10);
  const hiddenElementPosition = generateNumber(0, progressionLength - 1);
  const start = generateNumber(1, 50);
  let question = '';
  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === hiddenElementPosition) {
      question = `${question}.. `;
    } else {
      question = `${question}${start + step * i} `;
    }
  }
  const correctAnswer = start + step * hiddenElementPosition;
  return {
    question: question.trim(),
    correctAnswer: String(correctAnswer),
  };
};

export default () => gameInit(description, generateDataGame);
