#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameInit from '..';

const generateNumber = () => Math.floor(Math.random() * 20 + 1);
const rules = 'Find the greatest common divisor of given numbers';

const greatestDivisor = (num1, num2) => {
  const isLargestNumber = num1 > num2 ? num1 : num2;
  const iter = (counter) => {
    if (counter === 1) return counter;
    const isGreaterDivisor = num1 % counter === 0 && num2 % counter === 0;
    return isGreaterDivisor ? counter : iter(counter - 1);
  };
  return iter(isLargestNumber);
};

const game = (name, step) => {
  if (step === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const randomNumber1 = generateNumber();
  const randomNumber2 = generateNumber();
  console.log(`Question: ${randomNumber1}, ${randomNumber2}`);
  const yourAnswer = +readlineSync.question('Your answer: ');
  const correctAnswer = greatestDivisor(randomNumber1, randomNumber2);
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');
  game(name, step - 1);
};

gameInit(rules, game);
