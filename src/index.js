import readlineSync from 'readline-sync';
import askUserName from './cli.js';

export default (roundData, gameInstructions) => {
  const userName = askUserName();
  console.log(gameInstructions);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [questionData, answer] = roundData();
    const userAnswer = readlineSync.question(`Question: ${questionData}\nYour answer:`);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
