import game from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 2)];

  return {
    num1,
    num2,
    operator,
  };
};

const normalizeQuestion = ({ num1, operator, num2 }) => `${num1} ${operator} ${num2}`;

const generateAnswer = ({ num1, num2, operator }) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator');
  }
};

const generateRoundData = () => {
  const question = generateQuestion();
  const correctAnswer = generateAnswer(question);

  return {
    question: normalizeQuestion(question),
    correctAnswer: correctAnswer.toString(),
  };
};

const brainCalc = () => game(GAME_DESCRIPTION, generateRoundData);

export default brainCalc;
