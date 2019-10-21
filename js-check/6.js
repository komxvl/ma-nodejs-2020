const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];

const array3 = new Array();

for (var i = 0; i < first.length; i++) {
    array3.push(second[i]);
    array3.push(first[i]);

}
console.log(array3.reverse());