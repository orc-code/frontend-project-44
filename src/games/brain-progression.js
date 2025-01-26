import game from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'What number is missing in the progression?';

const generateProgression = (num1, num2) => {
  const step = num2 - num1;
  const progression = [...Array(10).keys()].map((i) => num1 + i * step);

  return progression;
};

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  return generateProgression(Math.min(num1, num2), Math.max(num1, num2));
};

const getIndexToHide = () => getRandomNumber(0, 9);

const normalizeQuestion = (progression, indexToHide) => {
  const progressionWithHidden = progression.map((num, i) => (i === indexToHide ? '..' : num));

  return progressionWithHidden.join(' ');
};

const generateAnswer = (progression, indexToHide) => progression[indexToHide];

const generateRoundData = () => {
  const question = generateQuestion();
  const indexToHide = getIndexToHide();
  const correctAnswer = generateAnswer(question, indexToHide);

  return {
    question: normalizeQuestion(question, indexToHide),
    correctAnswer: correctAnswer.toString(),
  };
};

const brainProgression = () => game(GAME_DESCRIPTIONS, generateRoundData);

export default brainProgression;
