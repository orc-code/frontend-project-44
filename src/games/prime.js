import runGame from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTIONS = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => getRandomNumber(1, 100);

const isPrime = (num) => {
  if (num === 2 || num === 3) {
    return true;
  }
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const generateRoundData = () => {
  const question = generateQuestion();
  const correctAnswer = generateAnswer(question);

  return {
    question,
    correctAnswer,
  };
};

const runPrimeGame = () => runGame(GAME_DESCRIPTIONS, generateRoundData);

export default runPrimeGame;
