const isPrime = require('./isPrime');

let counter = 0;
let latestPrimeNumber = 0;

setInterval(() => {
  counter++;
  if (isPrime(counter)) {
    latestPrimeNumber = counter;
    console.log(latestPrimeNumber);
  }
}, 0);

setInterval(() => {
  console.log(`${+new Date()} : -- IN PROCESS -- Biggest prime number found: ${latestPrimeNumber}`);
}, 1000);
