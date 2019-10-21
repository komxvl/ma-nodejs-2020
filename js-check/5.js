const data = '21345A67098';
number = '';
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        number += data[i];
    }
}
console.log(Number(number));