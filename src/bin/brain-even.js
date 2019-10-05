#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameInit from '..';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const generateNumber = () => Math.floor(Math.random() * 20 + 1);
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = (name, step) => {
  if (step === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const questionNumber = generateNumber();
  console.log(`Question: ${questionNumber}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(questionNumber);
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  game(name, step - 1);
};

gameInit(rules, game);
