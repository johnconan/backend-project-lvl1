import readlineSync from 'readline-sync';

const greeting = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  game(name);
};

export default greeting;
