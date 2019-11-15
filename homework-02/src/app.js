const { task1: sumModule, task2: earthModule, task3: promiseModule } = require('./task');

const boot = async () => {
  await sumModule.sum(1, 2, 6);
  await earthModule.planetEart.getPlaneValue();
  await promiseModule.setPromise;
};

boot();
