let age = 10;
if (age >= 18) {
    console.log(`You are eligible for voting`);

} else {
    console.log(`Yor are not eligible for vating`);

}

let year = 1804;
if (year % 400 === 0) {
    console.log(`This is leap year`);

} else if (year % 100 === 0) {
    console.log(`This is not a leap year`);

} else if (year % 4 === 0) {
    console.log(`This is leap year`);

}
else {
    console.log(`This is normal year`);

}


let mark = 91;
if (mark > 80) {
    console.log(`You are passed in Grade A`);

} else if (mark > 70) {
    console.log(`You are passed in Grade B`);

} else if (mark > 60) {
    console.log(`You are passed in Grade C`);

} else if (mark > 50) {
    console.log(`You are passed in Grade D`);

} else if (mark > 30) {
    console.log(`You are passed in Grade E`);

} else if (mark < 30) {
    console.log(`FAILED`);

}


let num1 = 12;
let num2 = 44;
let num3 = 65;
let num4 = 76;

if (num1 > num2 && num1 > num3 && num1 > num4) {
    console.log(`Number one is greater ${num1}`);

} else if (num2 > num1 && num2 > num3 && num2 > num4) {
    console.log(`Nmber two is gerater ${num2}`);

} else if (num3 > num1 && num3 > num2 && num3 > num4) {
    console.log(`Number three is greater ${num3}`);

} else {
    console.log(`Number four is greater ${num4}`);

}

let num = 16;
if (num % 3 === 0 && num % 5 === 0) {
    console.log(`No is divisible by 3 and 5`);

} else {
    console.log(`No is not divisible by 3 and 5`);

}

let intiger1 = 3;
let intiger2 = 2;
let result = 0
let sign = "/"

if (sign === "+") {
    result = intiger1 + intiger2
    console.log(result);

} else if (sign === "-") {
    result = intiger1 - intiger2
    console.log(result);

} else if (sign === "*") {
    result = intiger1 * intiger2
    console.log(result);

} else if (sign === "/") {
    result = intiger1 / intiger2
    console.log(result);

}

let a = 4;
let b = 3;
let c = 3;

if (((a * a) + (b * b) === (c * c)) || ((a * a) === (b * b) + (c * c)) || ((a * a) + (c * c) === (b * b))) {
    console.log(`Right angle Triangle`);

} else if (a == b && b == c && c == a) {
    console.log(`Equilateral Triangle`);

} else if (a == b || b == c || c == a) {
    console.log(`Isosceles Triangle`);

}

let letter = "A"

if (letter.toLocaleLowerCase().toString() === "a" || letter.toLocaleLowerCase().toString() === "e" || letter.toLocaleLowerCase().toString() === "i" || letter.toLocaleLowerCase().toString() === "o" || letter.toLocaleLowerCase().toString() === "u") {
    console.log(`Vowel`);

} else {
    console.log(`Consonant`);

}


let temp = 100;
let farhenites = 32;
// let Farhenites = (temp * 8 / 5) + 32
// console.log(Farhenites);
if (farhenites = (temp * 9 / 5) + farhenites) {
    console.log(farhenites);

}

let princple = 5000;
let time = 4;
let rate = 3;
let simpleInterest = (princple * time * rate) / 100
console.log(simpleInterest);

