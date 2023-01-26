import generateRandomNumber from '../utilits.js';
import startGame from '../index.js';

const getOperation = () => {
  const operations = ['*', '-', '+'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calculateExpression = (firstArg, secondArg, operation) => {
  switch (operation) {
    case '+':
      return firstArg + secondArg;
    case '-':
      return firstArg - secondArg;
    case '*':
      return firstArg * secondArg;
    default:
      return 'operation not defined';
  }
};

const generateDataOfRound = () => {
  const firstArg = generateRandomNumber(0, 1000);
  const secondArg = generateRandomNumber(0, 1000);
  const operation = getOperation();
  const expression = `${firstArg} ${operation} ${secondArg}`;
  const answer = `${calculateExpression(firstArg, secondArg, operation)}`;
  return [expression, answer];
};

export default () => {
  startGame(generateDataOfRound, 'What is the result of the expression?');
};
