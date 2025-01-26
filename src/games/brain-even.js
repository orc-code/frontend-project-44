import game from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => ({
  getQuestion: () => Math.floor(Math.random() * 100),
  getCorrectAnswer: (num) => (isEven(num) ? 'yes' : 'no'),
});

const isEven = (num) => num % 2 === 0;

const brainEven = () => game(gameDescription, generateRoundData);

export default brainEven;
