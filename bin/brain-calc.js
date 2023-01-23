// import readlineSync from 'readline-sync';
// import askUserName from '../src/cli.js';

// const getOperation = () => {
//   const operations = ['*', '-', '+'];
//   return operations[Math.floor(Math.random() * operations.length)];
// };

// const calculateExpression = (firstArg, secondArg, operation) => {
//   switch (operation) {
//     case '+':
//       return firstArg + secondArg;
//     case '-':
//       return firstArg - secondArg;
//     case '*':
//       return firstArg * secondArg;
//     default:
//       return 'operation not defined';
//   }
// };

// const checkCalculation = () => {
//   const userName = askUserName();
//   console.log('What is the result of the expression?');
//   for (let i = 0; i < 3; i += 1) {
//     const firstArg = Math.floor(Math.random() * 1000);
//     const secondArg = Math.floor(Math.random() * 1000);
//     const operation = getOperation();
//     const expression = firstArg + operation + secondArg;
//     const answer = calculateExpression(firstArg, secondArg, operation);
//     const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer:`);
//     if (+userAnswer === answer) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'
// .\nLet's try again, ${userName}!`);
//       return 'wasted';
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
//   return 'win';
// };

import startGame from '../src/index.js';
import gamesRound from '../games/calc.js';

startGame(gamesRound, 'What is the result of the expression?');
