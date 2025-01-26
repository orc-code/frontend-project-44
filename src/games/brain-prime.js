import game from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRoundData = () => {
  const question = generateQuestion();
  const correctAnswer = generateAnswer(question);

  return {
    question,
    correctAnswer,
  };
};

const generateQuestion = () => getRandomNumber(1, 100);

const generateAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const isPrime = (num) => {
  if (num === 2 || num === 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  const limit = Math.sqrt(num);
  const iter = (i) => i < limit && (num % i === 0 || iter(i + 1));
  return iter(2);
};

const brainPrime = () => game(GAME_DESCRIPTIONS, generateRoundData);

export default brainPrime;
