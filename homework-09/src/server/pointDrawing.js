const { Transform } = require('stream');

class PointDrawing extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, next) {
    process.stdout.write('.');
    next(null, chunk);
  }
}

module.exports = PointDrawing;