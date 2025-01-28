import runGame from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a < b) {
    return getGcd(b, a);
  }

  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const generateRoundData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return {
    question,
    correctAnswer,
  };
};

const runGcdGame = () => runGame(GAME_DESCRIPTIONS, generateRoundData);

export default runGcdGame;
