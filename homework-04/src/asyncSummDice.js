const promiseDice = require('./promiseDice');

const asyncVariant = async () => {
  try {
    console.log(`async`);
    const firstNumber = await promiseDice(700);
    const secondNumber = await promiseDice(2000);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(`Summ ${firstNumber + secondNumber}`));
      }, 3000);
        reject(console.log(`Error`));
    })
  } catch (e) {
    console.log(`Error ${e}`);
  }
};

module.exports = asyncVariant;
