import gameInit from '..';
import generateNumber from '../utilities';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateDataGame = () => {
  const step = generateNumber(2, 10);
  const riddleInGame = generateNumber(0, progressionLength); // не смог придумать лучше(
  const start = generateNumber(1, 50);
  let question = '';
  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === riddleInGame) {
      question = `${question}.. `;
    } else {
      question = `${question}${start + step * i} `;
    }
  }
  const correctAnswer = start + step * riddleInGame;
  return {
    question: question.trim(),
    correctAnswer: String(correctAnswer),
  };
};

export default () => gameInit(description, generateDataGame);
