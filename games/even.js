import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export default () => {
  const currentNumber = Math.floor(Math.random() * 1000);
  const answer = isEven();
  const userAnswer = readlineSync.question(`Question: ${currentNumber}\nYour answer:`);
  if (userAnswer.toLowerCase() === 'yes' && answer) {
    return 'round passed';
  }
  if (userAnswer.toLowerCase() === 'no' && !answer) {
    return 'round passed';
  }
  const roundsData = {};
  roundsData.userAnswer = userAnswer;
  roundsData.answer = answer ? 'yes' : 'no';
  return roundsData;
};
