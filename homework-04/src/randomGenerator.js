const throwDice = (cb) => {
  // return Math.floor(Math.random() * 7);
  randomInteger = Math.floor(Math.random() * 7);
  if (randomInteger === 0) {
    return cb(new Error(`Lost dice`));
  }
  return cb(null, randomInteger);
};

module.exports = throwDice;
