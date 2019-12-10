const promiseDice = require('./promiseDice');

const promiseSumDice = () => {
  return promiseDice(700).then((firstNumber) => {
    return promiseDice(2000).then((secondNumber) => {
      setTimeout(() => {
        console.log(`Summa: ${firstNumber + secondNumber}`);
      }, 3000);
    });
  });
};

module.exports = promiseSumDice;
