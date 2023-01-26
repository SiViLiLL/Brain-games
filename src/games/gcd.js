import generateRandomNumber from '../utilits.js';
import startGame from '../index.js';

const calculateGcd = (firstNumber, secondNumber) => {
  let divider = firstNumber <= secondNumber ? firstNumber : secondNumber;
  let dividend = divider === firstNumber ? secondNumber : firstNumber;
  while (divider <= dividend) {
    if (dividend % divider !== 0) {
      const helper = divider;
      divider = dividend % divider;
      dividend = helper;
    } else {
      return divider;
    }
  }
  return divider;
};

const generateDataOfRound = () => {
  const firstNumber = generateRandomNumber(0, 1000);
  const secondNumber = generateRandomNumber(0, 1000);
  const coupleOfNumbers = `${firstNumber} ${secondNumber}`;
  const answer = `${calculateGcd(firstNumber, secondNumber)}`;
  return [coupleOfNumbers, answer];
};

export default () => {
  startGame(generateDataOfRound, 'Find the greatest common divisor of given numbers.');
};
