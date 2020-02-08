const { Transform } = require('stream');

const config = require('../config/index');

class Limiter extends Transform {
  constructor(rate) {
    super();
    this.length = 0;
  }

  _transform(chunk, encoding, next) {
    const rateDelay = 1000; // 1000ms
    const rate = 1024 * 1024; // 1Mb
    const chunkLength = 512 * 1024; // 0.1Mb
    const timeoutDelay = (rateDelay / rate) * chunkLength;
    this.length += chunk.length;
    if (this.length >= 1048576) {
          process.stdout.write('.');
          this.length = 0;
        }
    setTimeout(() => {
      this.push(chunk);
      next();
    }, timeoutDelay);
  }
}

module.exports = Limiter;
