import readlineSync from 'readline-sync';

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

export default () => {
  const progression = generateProgressionStr();
  const answer = getHideMember(progression);
  const progressionForQuestion = getProgressinWithHideMember(progression, answer);
  const userAnswer = readlineSync.question(`Question: ${progressionForQuestion}\nYour answer: `);
  if (userAnswer === answer) {
    return 'round passed';
  }
  const roundsData = {};
  roundsData.userAnswer = userAnswer;
  roundsData.answer = answer;
  return roundsData;
};
