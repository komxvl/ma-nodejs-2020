setPromiseTimeout = (interval) => {
    return new Promise(resolve => setTimeout(resolve, interval));
}

setPromiseTimeout(5000).
    then(() => { console.log('done') });