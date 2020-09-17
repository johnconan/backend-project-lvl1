import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameInit = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer !== correctAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(counter - 1);
  };

  return iter(roundsCount);
};

export default gameInit;
