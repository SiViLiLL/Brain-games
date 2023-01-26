import startGame from '../index.js';
import generateRandomNumber from '../utilits.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};

const generateDataOfRound = () => {
  const number = generateRandomNumber(2, 3571);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  startGame(generateDataOfRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
