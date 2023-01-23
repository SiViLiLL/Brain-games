// import readlineSync from 'readline-sync';
// import askUserName from '../src/cli.js';

// const isEven = (number) => number % 2 === 0;

// const checkParity = () => {
//  const userName = askUserName();
//  console.log('Answer "yes" if the number is even, otherwise answer "no".');
//  for (let i = 0; i < 3; i += 1) {
//    const currentNumber = Math.floor(Math.random() * 1000);
//    const userAnswer = readlineSync.question(`Question: ${currentNumber}\nYour answer:`);
//    if (isEven(currentNumber) && userAnswer.toLowerCase() === 'yes') {
//      console.log('Correct!');
//    } else if (!isEven(currentNumber) && userAnswer.toLowerCase() === 'no') {
//      console.log('Correct!');
//    } else {
//      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer
// was 'no'.\nLet's try again, '${userName}'!`);
//      return 'wasted';
//    }
//  }
//  console.log(`Congratulations, ${userName}!`);
//  return 'win';
// };

// checkParity();

import startGame from '../src/index.js';
import gamesRound from '../games/even.js';

startGame(gamesRound, 'Answer "yes" if the number is even, otherwise answer "no".');
