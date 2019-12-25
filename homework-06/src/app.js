const os = require('os');

// set env for WindowOS $env:FOO = 'BAR'; ./myscript

let RATE = process.env.RATE || 1000;
let LIMIT = process.env.LIMIT || 300;
let COLOR = process.env.COLOR || true;

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


process.argv.forEach((val, index) => {
  console.log(val)
  const itemVal = val.split('=');
  console.log('itemVal', itemVal);
  const envValue = itemVal[0];
  if(envValue == 'rate'){
    RATE = itemVal[1]
  }
  else if(envValue == 'limit'){
    LIMIT = itemVal[1]
  }
  else if(envValue == 'color'){
    COLOR =  itemVal[1];
  }
});

 run(RATE, LIMIT, COLOR)
