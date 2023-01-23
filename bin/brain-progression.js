#!/usr/bin/env node

import startGame from '../src/index.js';
import gamesRound from '../games/progression.js';

startGame(gamesRound, 'What number is missing in the progression?');
