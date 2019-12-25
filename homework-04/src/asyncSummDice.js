const promiseDice = require('./promiseDice');

const asyncVariant = async () => {
  const firstNumber = await promiseDice(700);
  const secondNumber = await promiseDice(1300);
  try{
    setTimeout(() => {
      console.log(`Summ ${firstNumber + secondNumber}`);
    }, 1000);
  }
  catch(e){
    console.log(new Error(`Lost dice`));
  }
};

asyncVariant();
