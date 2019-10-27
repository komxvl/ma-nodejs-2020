

class Storage {

    constructor() { }
    list() {
        return new Promise((resolve, reject) => {
            resolve([1, 2, 3, 4, 56, 12]);
        });
    }

    fetchKey(key) {
        return new Promise((resolve, reject) => {
            resolve({ 'key': key });
        });
    }

    store(key, data) {
        return new Promise((resolve, reject) => {
            resolve({ 'data': data });
        });
    }

    destroy(key) {
        return new Promise((resolve, reject) => {
            resolve({ 'data': key });
        });
    }

    storeList([{ key, data }]) {
        return new Promise((resolve, reject) => {
            resolve([{ key, data }]);
        });
    }

    destroyStartedWith(beginningOfKey) {
        return new Promise((resolve, reject) => {
            resolve([{ key, data }]);
        });
    }

    fetchInTimeOrFail(key, timeout) {
        return new Promise((resolve, reject) => {
            timeout > 120 ? reject(new Error(`error`)) : resolve(console.log('response'))
        });
    }
}