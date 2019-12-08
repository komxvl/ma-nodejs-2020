const throwDice = require('./randomGenerator');

function generateFirstNumber(firstNumber) {
  if (firstNumber === 0) {
    console.log(new Error('Lost dice1'));
  } else {
    setTimeout(() => {
      console.log('number', firstNumber);
    }, 700);
    const secondNumber = throwDice();
    if (secondNumber === 0) {
      console.log(new Error('Lost dice2'));
    } else {
      setTimeout(() => {
        console.log('secondNumber', secondNumber);
        setTimeout(() => {
          const sum = firstNumber + secondNumber;
          console.log('sum', sum);
        }, 3000);
      }, 2000);
    }
  }
}

const firstNumber = throwDice();

function showResult() {
  console.log(`callback`);
  generateFirstNumber(firstNumber);
}

module.exports = showResult;
