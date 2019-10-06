import readlineSync from 'readline-sync';

const stepGame = 3;

const gameInit = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const step = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer !== correctAnswer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    step(counter - 1);
  };

  return step(stepGame);
};

export default gameInit;
