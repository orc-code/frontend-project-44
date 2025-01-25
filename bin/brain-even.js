import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = () => {
  const num = Math.floor(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${readlineSync.question('May I have your name? ')}!`);
  }
};

game();

export default game;
