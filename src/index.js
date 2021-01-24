import readlineSync from 'readline-sync';

export function hello() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
}

export function getRandomIntInclusive(min, max) {
  const innerMin = Math.ceil(min);
  const innerMax = Math.floor(max);
  return Math.floor(Math.random() * (innerMax - innerMin + 1)) + innerMin;
}

export function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}
