let num1 = 3;
let num2 = 7;
let result = num1 + num2
console.log(result);
result = num1 - num2
console.log(result);
result = num1 * num2
console.log(result);
result = num1 / num2
console.log(result);

num2 = num1 + num2
num1 = num2 - num1
num2 = num2 - num1
console.log(num1, num2);



let a = 31;
let b = 100;
let c = 12;

if (a > b && a > c) {
    console.log(`a is greater no ${a}`);

} else if (b > c && b > a) {
    console.log(` b is grater no ${b}`);

} else {
    console.log(` c is greter no ${c}`);

}

if (a < b && a < c) {
    console.log(`a is smaller no ${a}`);

} else if (b < c && b < a) {
    console.log(`b is smaller no ${b}`);

} else {
    console.log(`c is smaller no ${c}`);

}

let interger = 3

if (interger % 2 === 0) {
    console.log(`The no is even `);

} else {
    console.log(`The no is odd`);

}

if (interger > 0) {
    console.log(`The no is Positive ${interger}`);

} else if (interger < 0) {
    console.log(` The no is Negative ${interger}`);

} else {
    console.log(` The no is ${interger}`);

}