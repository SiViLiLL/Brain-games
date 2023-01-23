import readlineSync from 'readline-sync';
import askUserName from './cli.js';

const startGame = (game, gameInstructions) => {
  const userName = askUserName();
  console.log(gameInstructions);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    game();
  }
  console.log(`Congratulations, ${userName}!`);
};
