import readlineSync from 'readline-sync';
import askUserName from './cli.js';

export default (generateDataOfRound, gameInstructions) => {
  const userName = askUserName();
  console.log(gameInstructions);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataOfRound = generateDataOfRound();
    const userAnswer = readlineSync.question(`Question: ${dataOfRound.questionData}\nYour answer:`);
    if (userAnswer === dataOfRound.answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${dataOfRound.answer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
