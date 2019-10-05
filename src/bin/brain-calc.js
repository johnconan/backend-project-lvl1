#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameInit from '..';

const generateNumber = () => Math.floor(Math.random() * 20 + 1);
const rules = 'What is the result of the expression?';

const generateOperator = () => {
  const opArr = ['*', '-', '+'];
  const random = Math.floor(Math.random() * opArr.length);
  return opArr[random];
};

const game = (name, step) => {
  if (step === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  const randomNum1 = generateNumber();
  const randomNum2 = generateNumber();
  const randomOperator = generateOperator();
  const question = `${randomNum1}${randomOperator}${randomNum2}`;
  const isDivision = randomNum1 > randomNum2 ? randomNum1 - randomNum2 : randomNum2 - randomNum1;
  let correctAnswer;

  switch (randomOperator) {
    case '-':
      correctAnswer = isDivision;
      break;
    case '*':
      correctAnswer = randomNum1 * randomNum2;
      break;
    case '+':
      correctAnswer = randomNum1 + randomNum2;
      break;
    default:
      correctAnswer = 'Unknown';
  }

  console.log(`Question: ${question}`);
  const yourAnswer = +readlineSync.question('Your answer: ');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  game(name, step - 1);
};

gameInit(rules, game);
