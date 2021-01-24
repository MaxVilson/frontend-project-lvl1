import readlineSync from 'readline-sync';
import { hello, getRandomIntInclusive, gcd } from '../index.js';

export default function brainGcd() {
  const name = hello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomIntInclusive(1, 20);
    const number2 = getRandomIntInclusive(1, 20);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = gcd(number1, number2);

    if (+correctAnswer === +answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
