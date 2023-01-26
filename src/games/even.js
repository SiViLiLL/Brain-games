import generateRandomNumber from '../utilits.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateDataOfRound = () => {
  const currentNumber = generateRandomNumber(0, 1000);
  const answerOfRound = isEven(currentNumber) ? 'yes' : 'no';
  return { questionData: currentNumber, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};
