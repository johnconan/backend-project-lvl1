import readlineSync from 'readline-sync';

const step = 3;
const gameInit = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  game(name, step);
};

export default gameInit;
