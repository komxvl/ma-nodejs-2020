const promiseDice = require('./promiseDice');

const promiseSumDice = () => {
  console.log('promiseSumDice');
  const firstNumber = promiseDice(700);
  const secondNumber = promiseDice(2000);

  Promise.all([firstNumber, secondNumber]).then(
    (values) => {
      setTimeout(() => {
        console.log(
          `Summ = ${values.reduce(function(acc, val) {
            return acc + val;
          })}`,
        );
      }, 3000);
    },
    (reason) => {
      console.log(reason);
    },
  );
};

module.exports = promiseSumDice;
