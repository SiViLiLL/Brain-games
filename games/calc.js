import readlineSync from 'readline-sync';

const getOperation = () => {
  const operations = ['*', '-', '+'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calculateExpression = (firstArg, secondArg, operation) => {
  switch (operation) {
    case '+':
      return firstArg + secondArg;
    case '-':
      return firstArg - secondArg;
    case '*':
      return firstArg * secondArg;
    default:
      return 'operation not defined';
  }
};

export default () => {
  const maxNumber = 1000;
  const firstArg = Math.floor(Math.random() * maxNumber);
  const secondArg = Math.floor(Math.random() * maxNumber);
  const operation = getOperation();
  const expression = `${firstArg} ${operation} ${secondArg}`;
  const answer = calculateExpression(firstArg, secondArg, operation);
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer:`);
  if (+userAnswer === answer) {
    return 'round passed';
  }
  const roundsData = {};
  roundsData.userAnswer = userAnswer;
  roundsData.answer = answer;
  return roundsData;
};
