import startGame from '../index.js';
import generateRandomNumber from '../utilits.js';

const generateProgressionStr = () => {
  const step = generateRandomNumber(1, 100);
  let start = generateRandomNumber(0, 1000);
  const numberOfMembers = generateRandomNumber(5, 12);
  let progressionStr = '';
  for (let i = 0; i <= numberOfMembers; i += 1) {
    progressionStr += `${start} `;
    start += step;
  }
  return progressionStr.trim();
};

const getHideMember = (progressionStr) => {
  const progressionArr = progressionStr.split(' ');
  const indexOfHideMember = Math.floor(Math.random() * progressionArr.length);
  const hideMember = progressionArr[indexOfHideMember];
  return hideMember;
};

const getProgressinWithHideMember = (progressionStr, hideMember) => {
  const progressionArr = progressionStr.split(' ');
  const hideMemberIndex = progressionArr.indexOf(hideMember);
  progressionArr[hideMemberIndex] = '..';
  return progressionArr.join(' ');
};

const generateDataOfRound = () => {
  const progression = generateProgressionStr();
  const answerOfRound = `${getHideMember(progression)}`;
  const progressionForQuestion = getProgressinWithHideMember(progression, answerOfRound);
  return { questionData: progressionForQuestion, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'What number is missing in the progression?');
};
