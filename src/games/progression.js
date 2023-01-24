import startGame from '../index.js';
import numberGenerate from '../utilits.js';

const generateProgressionStr = () => {
  const maxStep = 100;
  const minStep = 1;
  const maxMembers = 12;
  const minMembers = 5;
  const minNumber = 0;
  const maxNumber = 1000;
  const step = numberGenerate(minStep, maxStep);
  let start = numberGenerate(minNumber, maxNumber);
  const numberOfMembers = Math.floor(Math.random() * (maxMembers - minMembers + 1) + minMembers);
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
