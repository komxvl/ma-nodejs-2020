const isPrime = require('./isPrime');

let counter = 0;
let latestPrime = 0;

setInterval(() => {
  counter++;
  if (isPrime(counter)) {
    latestPrime = counter;
    console.log(latestPrime);
  }
}, 0);
