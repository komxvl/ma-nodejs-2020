const promiseDice = require('./promiseDice');

const promiseSumDice = () => {
  return promiseDice(700).then((firstNumber) => {
    return promiseDice(1300).then((secondNumber) => {
      setTimeout(() => {
        console.log(`Summa: ${firstNumber + secondNumber}`);
      }, 1000);
    });
  });
};

promiseSumDice();
