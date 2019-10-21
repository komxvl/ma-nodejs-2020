setPromiseTimeout = (intrval) => {
    return new Promise(resolve => setTimeout(resolve, intrval));
}

setPromiseTimeout(5000).
    then(() => { console.log('done') });