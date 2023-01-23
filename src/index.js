import askUserName from './cli.js';

export default (gamesRound, gameInstructions) => {
  const userName = askUserName();
  console.log(gameInstructions);
  const numberOfRounds = 3;
  let wasCompletedSuccessfully = true;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundResult = gamesRound(userName);
    if (roundResult === 'round passed') {
      console.log('Correct!');
    } else {
      console.log(`'${roundResult}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, '${userName}'!`);
      wasCompletedSuccessfully = false;
      break;
    }
  }
  if (wasCompletedSuccessfully) {
    console.log(`Congratulations, ${userName}!`);
  }
};
