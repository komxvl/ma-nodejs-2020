let str = "Hello world!";
const target = "o";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos + 1);
}
str = str.replace(/l/gi, '');
console.log(str);