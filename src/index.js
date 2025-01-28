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

const runGame = (gameDescription, generateRoundData) => {
  showWelcomeGameMessage(gameDescription);
  startRound(generateRoundData, 1);
  showResultGame();
};

export default runGame;
