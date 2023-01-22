import readlineSync from 'readline-sync';
import askUserName from '../src/cli.js';

const calculateGcd = (firstNumber, secondNumber) => {
  let divider = firstNumber <= secondNumber ? firstNumber : secondNumber;
  let divisible = divider === firstNumber ? secondNumber : firstNumber;
  while (divider <= divisible) {
    if (divisible % divider !== 0) {
      const helper = divider;
      divider = divisible % divider;
      divisible = helper;
    } else {
      return divider;
    }
  }
  return divider;
};

const checkGcd = () => {
  const userName = askUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 1000);
    const secondNumber = Math.floor(Math.random() * 1000);
    const answer = calculateGcd(firstNumber, secondNumber);
    const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer:`);
    if (+userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return 'wasted';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'win';
};

checkGcd();
