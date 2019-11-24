const { task1: sumModule, task2: earthModule, task3: promiseModule } = require('./task');

const boot = async () => {
  sumModule.sum(1, 2, 6);
  await promiseModule.setPromise.then((event) => {
    console.log(event);
  });
  earthModule.planetEart.getPlaneValue();
};

boot();
