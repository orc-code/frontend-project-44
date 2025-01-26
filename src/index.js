import * as communication from './utility/communication.js';

const MAX_ROUND_COUNT = 3;
const GAME_TITLE = 'the Brain Games';

let userName;
let isWin = false;

const game = (gameDescription, generateRoundData) => {
  showWelcomeGameMessage(gameDescription);
  startRound(generateRoundData, 1);
  showResultGame(userName);
};

const showWelcomeGameMessage = (gameDescription) => {
  communication.showMessage(`Welcome to ${GAME_TITLE}!`);
  userName = communication.getUserName();
  communication.showHello(userName);
  communication.showMessage(gameDescription);
};

const startRound = (generateRoundData, roundCount) => {
  const { question, correctAnswer } = generateRoundData();

  communication.showQuestion(question);
  const userAnswer = communication.getUserAnswer();

  isCorrectAnswer(userAnswer, correctAnswer)
    ? processCorrectAnswer(generateRoundData, roundCount)
    : processWrongAnswer(userAnswer, correctAnswer);
};

const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const processCorrectAnswer = (generateRoundData, roundCount) => {
  communication.showCorrectAnswer();

  if (roundCount < MAX_ROUND_COUNT) {
    startRound(generateRoundData, roundCount + 1);
  }

  isWin = true;
};

const processWrongAnswer = (answer, correctAnswer) => {
  communication.showWrongAnswer(answer, correctAnswer);
};

const showResultGame = (userName) => {
  isWin ? communication.showCongratulations(userName) : communication.showTryAgain(userName);
};

export default game;
