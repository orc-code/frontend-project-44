import runGame from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [...Array(length).keys()].map((i) => start + i * step);

  return progression;
};

const generateRoundData = () => {
  const progressionStart = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 100);
  const progressionLength = 10;
  const progression = generateProgression(progressionStart, progressionStep, progressionLength);
  const indexToHide = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[indexToHide].toString();

  progression[indexToHide] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const runProgressionGame = () => runGame(GAME_DESCRIPTIONS, generateRoundData);

export default runProgressionGame;
