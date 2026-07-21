//  console.log(20+5);
//  console.log(20-5);
//  console.log(20*5);
//  console.log(20/5);
//  console.log(20%5
//  x = 20;
//  y = 23;
//  x = x + y;
//  console.log(x
//  let z = "10";
//  let a = Number(z);
//  console.log(z);
//  console.log(typeof a
//  x = 20;
//  y = "20";
//  console.log(x==y);
//  console.log(x===y
//  let a = "123";
//  console.log(typeof a);
//  let b = Number(a);
//  console.log(typeof b);f

//  let a = 10;
//  console.log(typeof a);
//  let b = String(a);
//  console.log(typeof b);

// let a = true;
// console.log(typeof a);
// let b = Number(a);
// console.log(typeof b);
// console.log(b);

// let c = false;
// let d = Number(c);
// console.log(typeof d);
// console.log(d);

// console.log(typeof String(true));

// console.log(Boolean(10));
// console.log(Boolean(0));
// console.log(Boolean(-10));

// console.log(Boolean("Hello"));
// console.log(Boolean(""));

// computer science problem -->

// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c); // 0.30000000000000004 because of floating point precision issues in JavaScript
// console.log(c.toFixed(1)); // 0.3 because toFixed rounds the number to the specified number of decimal places

// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(null==0); // false
// console.log(null>=0); // true
// console.log(null>0); // false
 
// console.log("Shubham">"Savinaya"); // true because "h" comes after "a" in the ASCII table
 
// console.log(NaN == NaN); // NaN is not equal to NaN because NaN is not a number and cannot be compared to any value, including itself 

// Loops 

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// } // this for loop will print numbers from 1 to 10 in the console. The loop starts with i = 1, and continues as long as i is less than or equal to 10, incrementing i by 1 in each iteration.

// while loop

// let i = 1;
// while (i<=10) {
//   console.log(i);
//   i++
// }


// do while loop 

// let i = 0;
// do {
//   console.log("Hello World");
//   i++;
// } while (i<5); // this do while loop will print "Hello World" 5 times in the console. The loop starts with i = 0, and continues as long as i is less than 5, incrementing i by 1 in each iteration. The difference between a do while loop and a while loop is that a do while loop will always execute the code block at least once, even if the condition is false, whereas a while loop will only execute the code block if the condition is true.


// let age = 128;

// if(age>=18 && age <=100) {
//   console.log("You are eligible for voting!");
// } else if (age<18 && age>=0) {
//   console.log("You are not eligible for voting!");
// } else {
//   console.log("Enter valid age");
// }

// Logical Operators

// let a = "Shubham";
// let b = "Savinaya";
// let c = a&&b;
// console.log(c); // this will print "Savinaya" because the && operator returns the second operand if the first operand is truthy, and both a and b are truthy values. If a was falsy, it would return a instead.
// let d = a||b;
// console.log(d); // this will print "Shubham" because the || operator returns the first operand if it is truthy, and a is a truthy value. If a was falsy, it would return b instead. 