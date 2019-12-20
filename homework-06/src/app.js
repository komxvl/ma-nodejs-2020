const os = require('os');

// set env for WindowOS $env:FOO = 'BAR'; ./myscript

const RATE = process.env.RATE || 1000;
const LIMIT = process.env.LIMIT || 300;
const COLOR = process.env.COLOR || true;

// run(RATE, LIMIT, COLOR);

function run(rate, limit, color) {
  let oldMemory = 0;
  setInterval(() => {
    const totalMemorySizeInMB = (os.totalmem() / Math.pow(1024, 2)).toFixed(4);
    const freeMemorySizeInMB = (os.freemem() / Math.pow(1024, 2)).toFixed(4);
    const usedMemorySize = Math.round((totalMemorySizeInMB - freeMemorySizeInMB) * 1000) / 1000;
    const delta = Math.round((usedMemorySize - oldMemory) * 1000) / 1000;
    oldMemory = usedMemorySize;
    if (color) {
      if (delta > 0) {
        console.log('\x1b[32m', `delta : ${delta} MB`, '\x1b[37m');
      } else {
        console.log('\x1b[31m', `delta : ${delta} MB`, '\x1b[37m');
      }
    } else {
      console.log(`Delta: ${delta} MB`);
    }
    if (freeMemorySizeInMB < limit) {
      if (color) {
        console.log(
          '\x1b[31m',
          '!!! ATTENTION: Available memory is under the defined limit !!!',
          '\x1b[37m',
        );
      } else {
        console.log('!!! ATTENTION: Available memory is under the defined limit !!!');
      }
    }
  }, rate);
}

const obj = {};

process.argv.forEach((val, index) => {
  obj[val.split('=')[0]] = val.split('=')[1];
});
console.log('obj', obj);

let rate;
let limit;
let color;

Object.keys(obj).map((key, index) => {
  console.log('key...');
});

console.log(obj);

// Task with *

// run(rate, limit, color)
