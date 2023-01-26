import generateRandomNumber from '../utilits.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateDataOfRound = () => {
  const currentNumber = generateRandomNumber(0, 1000);
  const answer = isEven(currentNumber) ? 'yes' : 'no';
  return [currentNumber, answer];
};

export default () => {
  startGame(generateDataOfRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};
