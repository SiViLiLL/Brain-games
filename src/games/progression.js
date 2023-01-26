import startGame from '../index.js';
import generateRandomNumber from '../utilits.js';

const generateProgression = (start, step) => {
  let currentValue = start;
  const numberOfMembers = generateRandomNumber(5, 12);
  const progression = [];
  for (let i = 0; i <= numberOfMembers; i += 1) {
    progression.push(currentValue);
    currentValue += step;
  }
  return progression;
};

const generateDataOfRound = () => {
  const start = generateRandomNumber(0, 1000);
  const step = generateRandomNumber(1, 100);
  const progression = generateProgression(start, step);
  const indexOfHideMember = generateRandomNumber(0, progression.length - 1);
  const hideMember = progression[indexOfHideMember];
  const hideMemberIndex = progression.indexOf(hideMember);
  const answer = `${hideMember}`;
  progression[hideMemberIndex] = '..';
  const progressionForQuestion = progression.join(' ');
  return [progressionForQuestion, answer];
};

export default () => {
  startGame(generateDataOfRound, 'What number is missing in the progression?');
};
