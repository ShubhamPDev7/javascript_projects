// Number
/*
let a = 10;
console.log(a);

let b = 235.123;
console.log(b);

console.log(b.toFixed(2)); // 235.12  
// toFixed() method formats a number using fixed-point notation and returns a string representation of the number with the specified number of decimal places.

console.log(typeof b.toFixed(2)); // string
// toFixed() returns a string, so the type of b.toFixed(2) is string. 
// why toFixed() returns a string instead of a number is because it is designed to format the number for display purposes, and returning a string allows for more flexibility in how the formatted number can be used or displayed.  


let a = 124.56789;
console.log(a.toPrecision(4)); // 124.6
// toPrecision() method formats a number to a specified length and returns a string representation of the number with the specified number of significant digits.

console.log(a.toString()); // "124.56789"


let a = new Number(30);

console.log(typeof a); // returns "object" type

let b = new Number(30);

console.log(a == b); // returns false because a and b are two different objects in memory, even though they have the same value.
*/

// Math Object
// Math object provides properties and methods for mathematical constants and functions. It is not a constructor, so you cannot create instances of it. All properties and methods of the Math object are static, meaning you can access them directly from the Math object without creating an instance.

// console.log(Math.abs(-5)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16)); // 4
// console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)  
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.trunc(4.9)); // 4
// // Math.trunc() method returns the integer part of a number by removing any fractional digits. It does not round the number, it simply truncates it towards zero.
// console.log(Math.sign(-5)); // -1
// // Math.sign() method returns the sign of a number, indicating whether the number is positive, negative, or zero. It returns 1 for positive numbers, -1 for negative numbers, and 0 for zero.

// console.log(Math.round(Math.random() * 100)); // returns a random integer between 0 and 100

// Gambling game
// console.log(Math.floor(Math.random() * 6) + 1);

// generate random number from 15 to 25
// console.log(Math.floor(Math.random()*11)+15);

// generate random number from 35 to 55 
// formula Math.floor(Math.random()*(max-min+1))+min

// console.log(Math.floor(Math.random()*21)+35);

// Generate OTP 1000 to 9999

// console.log(Math.floor(Math.random()*9000)+1000);

// function generateOtp() {
//   console.log(Math.floor(Math.random()*9000)+1000);
// }

// generateOtp();

// why we dont use Math.random() to genreate OTPs? 
// because Math.random() use seed value and then perform operations on that seed value to give final output but this seed value can be u ur device's time so if someone gussed ur seed value they can hack ur otp