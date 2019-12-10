const promiseDice = require('./promiseDice');

const asyncVariant = async () => {
  try {
    const firstNumber = await promiseDice(700);
    const secondNumber = await promiseDice(2000);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(`Summ ${firstNumber + secondNumber}`));
      }, 3000);
      reject(new Error(`Lost dice`));
    });
  } catch (e) {
    console.log(new Error(`Lost dice`));
  }
};

module.exports = asyncVariant;
