setPromiseTimeout = (interval, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
    }, interval);
  });
};

module.exports.setPromise = setPromiseTimeout(5000, 'Hello World!');
