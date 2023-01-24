import numberGenerate from '../utilits.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateDataOfRound = () => {
  const minNumber = 0;
  const maxNumber = 1000;
  const currentNumber = numberGenerate(minNumber, maxNumber);
  const answerOfRound = isEven(currentNumber) ? 'yes' : 'no';
  return { questionData: currentNumber, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'Answer "yes" if the number is even, otherwise answer "no".');
};
