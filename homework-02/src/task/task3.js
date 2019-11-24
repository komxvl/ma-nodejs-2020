setPromiseTimeout = (interval, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, interval);
  });
};

module.exports.setPromise = setPromiseTimeout(5000, 'Hello World!');
