import readlineSync from 'readline-sync';

const roundsInGame = 3;

const gameInit = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const coreGame = (rounds) => {
    if (rounds === 0) {
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
    coreGame(rounds - 1);
  };

  return coreGame(roundsInGame);
};

export default gameInit;
