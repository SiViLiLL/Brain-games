import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export default () => {
  const currentNumber = Math.floor(Math.random() * 1000);
  const userAnswer = readlineSync.question(`Question: ${currentNumber}\nYour answer:`);
  if (isEven(currentNumber) && userAnswer.toLowerCase() === 'yes') {
    return 'round passed';
  }
  if (!isEven(currentNumber) && userAnswer.toLowerCase() === 'no') {
    return 'round passed';
  }
  return 'wasted';
};
