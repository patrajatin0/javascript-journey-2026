// let number = 100

// for (let i = 1; i <= number; i++) {
//     // console.log(i);

// }
let reverse = 1
for (let i = 100; i >= reverse; i--) {
    // console.log(i);


}

let sum = 0
for (let i = 1; i <= 5; i++) {
    sum = sum + i

}
// console.log(sum);

let factor = 1
for (let i = 1; i <= 5; i++) {
    factor = factor * i


}
// console.log(factor);

// let num = 5
let maxnum = 10

for (let i = 1; i <= maxnum; i++) {
    // console.log(num * i);


}

let nums = 16;

let reversenum = 0;

while (nums > 0) {
    let digit = nums % 10;
    reversenum = reversenum * 10 + digit;
    nums = Math.floor(nums / 10);
}

console.log(reversenum);



// while (numbers > 0) {
//     numbers = Math.floor(numbers / 10)
//     count++
// }
// console.log(count);


// while (numbers > 0) {
//     let digit = numbers % 10
//     count = count + digit
//     numbers = Math.floor(numbers / 10)
// }

// console.log(count);

let numbers = 121
let original = numbers
let count = 0
while (numbers > 0) {
    let digit = numbers % 10
    count = count * 10 + digit
    numbers = Math.floor(numbers / 10)
}


if (original === count) {
    console.log("Palendrome Number");

} else {
    console.log("Not a palendrome Number");

}



let num = 8
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break;
        }

    }
}
if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}