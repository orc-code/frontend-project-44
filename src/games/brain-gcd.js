import game from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  return {
    num1,
    num2,
  };
};

const normalizeQuestion = ({ num1, num2 }) => `${num1} ${num2}`;

const generateAnswer = ({ num1, num2 }) => {
  const iter = (a, b) => {
    if (a < b) {
      return iter(b, a);
    }

    if (!b) {
      return a;
    }

    return iter(b, a % b);
  };

  return iter(num1, num2);
};

const generateRoundData = () => {
  const question = generateQuestion();
  const correctAnswer = generateAnswer(question);

  return {
    question: normalizeQuestion(question),
    correctAnswer: correctAnswer.toString(),
  };
};

const brainGcd = () => game(GAME_DESCRIPTIONS, generateRoundData);

export default brainGcd;
