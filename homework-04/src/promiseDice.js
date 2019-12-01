const throwDice = require('./randomGenerator');

const promiseDice = (interval) => {
  return new Promise((resolve, reject) => {
    const number = throwDice();
    if (number === 0) {
      reject('Lost dice');
    } else {
      resolve(number);
      setTimeout(() => {
        console.log(`number ${number}`);
      }, interval);
    }
  });
};

module.exports = promiseDice;
