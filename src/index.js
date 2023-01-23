import askUserName from './cli.js';

export default (gamesRound, gameInstructions) => {
  const userName = askUserName();
  console.log(gameInstructions);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const userAnswer = '';
    const roundResult = gamesRound(userName);
    if (roundResult === 'wasted') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, '${userName}'!`);
      break;
    } else if (roundResult === 'round passed') {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
