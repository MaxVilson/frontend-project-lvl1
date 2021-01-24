import readlineSync from 'readline-sync';
import { hello, getRandomIntInclusive } from '../index.js';

export default function brainEven() {
  const name = hello();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    let operand = '+';
    if (i === 1) {
      operand = '-';
    } else if (i === 2) {
      operand = '*';
    }
    const number1 = getRandomIntInclusive(1, 20);
    const number2 = getRandomIntInclusive(1, 20);
    console.log(`Question: ${number1} ${operand} ${number2}`);
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = eval(+number1 +operand +number2);
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
