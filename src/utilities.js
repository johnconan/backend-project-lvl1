// Generate random number 1 / 20;
const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// check number is even
const isEven = (num) => (num % 2 === 0);

// check number is prime
const isPrime = (num) => {
  const iter = (count) => {
    if (num === count) return true;
    if (num % count === 0) return false;
    return iter(count + 1);
  };
  return iter(2);
};

// Find greatest divisor between two numbers;
const greatestDivisor = (num1, num2) => {
  const isLargestNumber = num1 > num2 ? num1 : num2;
  const iter = (counter) => {
    if (counter === 1) return counter;
    const isGreaterDivisor = num1 % counter === 0 && num2 % counter === 0;
    return isGreaterDivisor ? counter : iter(counter - 1);
  };
  return iter(isLargestNumber);
};

// generate random operator *, -, +
const generateOperator = () => {
  const opArr = ['*', '-', '+'];
  const random = Math.floor(Math.random() * opArr.length);
  return opArr[random];
};

export {
  generateNumber,
  greatestDivisor,
  isEven,
  generateOperator,
  isPrime,
};
