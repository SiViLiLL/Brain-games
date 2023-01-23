import readlineSync from 'readline-sync';

const generateNumber = () => {
  const maxNumber = 3571;
  const minNumber = 2;
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (!(number % i)) {
      return true;
    }
  }
  return false;
};

export default () => {
  const numberForAsk = generateNumber();
  const answer = isPrime();
  const userAnswer = readlineSync.question(`Question: ${numberForAsk}\nYour answer: `);
  if (userAnswer.toLowerCase() === 'yes' && answer) {
    return 'round passed';
  }
  if (userAnswer.toLowerCase() === 'no' && !answer) {
    return 'round passed';
  }
  return userAnswer;
};
