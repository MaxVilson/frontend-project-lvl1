import readlineSync from 'readline-sync';
import { hello, getRandomIntInclusive } from '../index.js';

export default function brainEven() {
  const name = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomIntInclusive(1, 20);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      const correctAnswer = answer === 'yes' ? 'no' : 'yes';
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
