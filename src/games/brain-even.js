import game from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => `${getRandomNumber(1, 100)}`;

const isEven = (num) => num % 2 === 0;

const generateAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateRoundData = () => {
  const question = generateQuestion();
  const correctAnswer = generateAnswer(question);

  return {
    question,
    correctAnswer,
  };
};

const brainEven = () => game(GAME_DESCRIPTIONS, generateRoundData);

export default brainEven;
