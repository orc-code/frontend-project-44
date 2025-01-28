import * as communication from './utility/communication.js';

const MAX_ROUND_COUNT = 3;
const GAME_TITLE = 'the Brain Games';

const runGame = (gameDescription, generateRoundData) => {
  communication.showMessage(`Welcome to ${GAME_TITLE}!`);
  const userName = communication.getUserName();
  communication.showHello(userName);
  communication.showMessage(gameDescription);

  for (let i = 0; i < MAX_ROUND_COUNT; i += 1) {
    const { question, correctAnswer } = generateRoundData();

    communication.showQuestion(question);
    const userAnswer = communication.getUserAnswer();

    if (userAnswer !== correctAnswer) {
      communication.showWrongAnswer(userAnswer, correctAnswer);
      communication.showTryAgain(userName);
      return;
    }

    communication.showCorrectAnswer();
  }

  communication.showCongratulations(userName);
};

export default runGame;
