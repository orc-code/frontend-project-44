import runGame from '../index.js';
import getRandomNumber from '../utility/getRandomNumber.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateAnswer = ({ operand1, operand2, operator }) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRoundData = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = generateAnswer(question).toString();

  return {
    question,
    correctAnswer,
  };
};

const runCalcGame = () => runGame(GAME_DESCRIPTION, generateRoundData);

export default runCalcGame;
