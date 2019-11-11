const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];

const array3 = new Array();

for (var i = first.length-1; i >= 0; i--) {
    array3.push(first[i]);
    array3.push(second[i]);
}
console.log(array3);