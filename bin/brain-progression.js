import readlineSync from 'readline-sync';
import askUserName from '../src/cli.js';

const generateProgressionStr = () => {
  const maxStep = 100;
  const minStep = 1;
  const maxMembers = 12;
  const minMembers = 5;
  const step = Math.floor(Math.random() * (maxStep - minStep + 1) + minStep);
  let start = Math.floor(Math.random() * 1000);
  const numberOfMembers = Math.floor(Math.random() * (maxMembers - minMembers + 1) + minMembers);
  let progressionStr = '';
  for (let i = 0; i <= numberOfMembers; i += 1) {
    progressionStr += `${start} `;
    start += step;
  }
  return progressionStr;
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

const checkMemberOfProgression = () => {
  const userName = askUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgressionStr();
    const answer = getHideMember(progression);
    const progressionForQuestion = getProgressinWithHideMember(progression, answer);
    const userAnswer = readlineSync.question(`Question: ${progressionForQuestion}\nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return 'wasted';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'win';
};

checkMemberOfProgression();
