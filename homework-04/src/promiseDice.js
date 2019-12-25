const rndGenerator = require('./rndGenerator');

const promiseDice = (interval) => {
  return new Promise((resolve, reject) => {
    const randomNumber = rndGenerator();
    if (randomNumber === 0) {
      reject(new Error(`Lost dice`));
    } else {
      setTimeout(() => {
        resolve(randomNumber);
        console.log(`Number: ${randomNumber}`);
      }, interval);
    }
  });
};

module.exports = promiseDice;
