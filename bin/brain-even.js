#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = (roundCount = 1) => {
  const num = Math.floor(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (roundCount < 3) {
      game(roundCount + 1);
    }
    if (roundCount === 3) {
      console.log('Congratulations, you win!');
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again!`);
  }
};

game();

export default game;
