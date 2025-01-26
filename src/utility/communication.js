import readlineSync from 'readline-sync';

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getUserName = () => readlineSync.question('May I have your name? ');

export const showQuestion = (question) => console.log(`Question: ${question}`);

export const showCorrectAnswer = () => console.log('Correct!');

export const showWrongAnswer = (answer, correctAnswer) =>
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

export const showCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);

export const showTryAgain = (userName) => console.log(`Let's try again, ${userName}!`);

export const showHello = (userName) => console.log(`Hello, ${userName}!`);

export const showMessage = (message) => console.log(message);
