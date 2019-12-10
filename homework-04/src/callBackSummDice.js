const throwDice = require('./randomGenerator');

showResult = () => {
  setTimeout(() => {
    throwDice((error, firstNumber) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`First ${firstNumber}`);
        setTimeout(() => {
          throwDice((secondError, secondNumber) => {
            if (secondError) {
              console.log(secondError);
            } else {
              console.log(`Second ${secondNumber}`);
              setTimeout(() => {
                console.log(`Sum is ${firstNumber + secondNumber}`);
              }, 2000);
            }
          });
        }, 3000);
      }
    });
  }, 700);
};

module.exports = showResult;
