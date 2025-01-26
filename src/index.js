import * as communication from './utility/communication.js';

const MAX_ROUND_COUNT = 3;
const GAME_TITLE = 'the Brain Games';

let userName;
let isWin = false;

const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

function showWelcomeGameMessage(gameDescription) {
  communication.showMessage(`Welcome to ${GAME_TITLE}!`);
  userName = communication.getUserName();
  communication.showHello(userName);
  communication.showMessage(gameDescription);
}

function startRound(generateRoundData, roundCount) {
  const { question, correctAnswer } = generateRoundData();

  communication.showQuestion(question);
  const userAnswer = communication.getUserAnswer();

  if (!isCorrectAnswer(userAnswer, correctAnswer)) {
    communication.showWrongAnswer(userAnswer, correctAnswer);
    return;
  }

  communication.showCorrectAnswer();

  if (roundCount < MAX_ROUND_COUNT) {
    startRound(generateRoundData, roundCount + 1);
  }

  if (roundCount === MAX_ROUND_COUNT) {
    isWin = true;
  }
}

function showResultGame() {
  if (isWin) {
    communication.showCongratulations(userName);
  } else {
    communication.showTryAgain(userName);
  }
}

/**
 * Starts the game by displaying a welcome message, initiating game rounds,
 * and showing the final result based on the player's performance.
 *
 * @param {string} gameDescription - Description of the game to be displayed to the user.
 * @param {Function} generateRoundData - A function to generate data for each round,
 * including the question and correct answer.
 */

const game = (gameDescription, generateRoundData) => {
  showWelcomeGameMessage(gameDescription);
  startRound(generateRoundData, 1);
  showResultGame();
};

export default game;
