import generateRandomNumber from '../utilits.js';
import startGame from '../index.js';

const getTheSmallestNum = (num1, num2) => (num1 < num2 ? num1 : num2);

const getTheLargestNum = (num1, num2) => (num1 > num2 ? num1 : num2);

const calculateGcd = (firstNumber, secondNumber) => {
  let smallNum = getTheSmallestNum(firstNumber, secondNumber);
  let largNum = getTheLargestNum(firstNumber, secondNumber);
  while (largNum !== smallNum) {
    const difference = largNum - smallNum;
    if (difference < smallNum) {
      largNum = smallNum;
      smallNum = difference;
    } else {
      largNum = difference;
    }
  }
  return largNum;
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
