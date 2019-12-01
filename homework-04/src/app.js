const asyncVariant = require('./asyncSummDice');
const promiseSumDice = require('./promiseSummDice');
const generateFirstNumber = require('./callBackSummDice');

setTimeout(() => {
  generateFirstNumber();
}, 0);

setTimeout(() => {
  promiseSumDice();
}, 5000);

setTimeout(() => {
  asyncVariant();
}, 7000);
