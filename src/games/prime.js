import startGame from '../index.js';
import numberGenerate from '../utilits.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};

const generateDataOfRound = () => {
  const number = numberGenerate(2, 3571);
  const answerOfRound = isPrime(number) ? 'yes' : 'no';
  return { questionData: number, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
