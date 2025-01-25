import readlineSync from 'readline-sync';

function greeting() {
  const welcomeMessage = 'Welcome to the Brain Games!';
  console.log(welcomeMessage);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default greeting;
