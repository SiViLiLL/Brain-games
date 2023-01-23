import readlineSync from 'readline-sync';

const calculateGcd = (firstNumber, secondNumber) => {
  let divider = firstNumber <= secondNumber ? firstNumber : secondNumber;
  let divisible = divider === firstNumber ? secondNumber : firstNumber;
  while (divider <= divisible) {
    if (divisible % divider !== 0) {
      const helper = divider;
      divider = divisible % divider;
      divisible = helper;
    } else {
      return divider;
    }
  }
  return divider;
};

export default () => {
  const maxNumber = 1000;
  const firstNumber = Math.floor(Math.random() * maxNumber);
  const secondNumber = Math.floor(Math.random() * maxNumber);
  const answer = calculateGcd(firstNumber, secondNumber);
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer:`);
  if (+userAnswer === answer) {
    return 'round passed';
  }
  const roundsData = {};
  roundsData.userAnswer = userAnswer;
  roundsData.answer = answer;
  return roundsData;
};
