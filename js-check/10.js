

class Storage {

    constructor() { }

    async list() {

        const response = await new Promise((resolve, reject) => {
            resolve([1, 2, 3, 4, 56, 12]);
        });

        return response;
    }

    async fetchKey(key) {

        const response = await new Promise((resolve, reject) => {
            resolve({ 'key': key });
        });

        return response;
    }

    async store(key, data) {

        const response = await new Promise((resolve, reject) => {
            resolve({ 'data': data });
        });

        return response;
    }

    async destroy(key) {

        const response = await new Promise((resolve, reject) => {
            resolve({ 'data': key });
        });

        return response;
    }

    async storeList([{ key, data }]) {

        const response = await new Promise((resolve, reject) => {
            resolve([{ key, data }]);
        });

        return response;
    }

    async destroyStartedWith(beginningOfKey) {

        const someObj = { '1test': 'test', 'qwe': '12', '11': 222 }

        const response = await new Promise((resolve, reject) => {

            Object.keys(someObj).forEach((key) => {
                if (key.match(beginningOfKey)) delete someObj[key];
            });

            resolve(someObj);
        });

        return response;
    }

    async fetchInTimeOrFail(key, timeout) {

        const response = await new Promise((resolve, reject) => {
            timeout > 120 ? reject(new Error(`error`)) : resolve(console.log('response'))
        });

        return response;
    }
}