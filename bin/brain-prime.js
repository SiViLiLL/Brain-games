import readlineSync from 'readline-sync';
import askUserName from '../src/cli.js';

const generateNumber = () => {
  const maxNumber = 3571;
  const minNumber = 2;
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (!(number % i)) {
      return true;
    }
  }
  return false;
};

const checkNum = () => {
  const userName = askUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numberForAsk = generateNumber();
    const answer = isPrime();
    const userAnswer = readlineSync.question(`Question: ${numberForAsk}\nYour answer: `);
    if (userAnswer.toLowerCase() === 'yes' && answer) {
      console.log('Correct!');
    } else if (userAnswer.toLowerCase() === 'no' && !answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return 'wasted';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'win';
};

checkNum();
