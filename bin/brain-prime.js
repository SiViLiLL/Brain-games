#!/usr/bin/env node

import startGame from '../src/index.js';
import gamesRound from '../games/prime.js';

startGame(gamesRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
