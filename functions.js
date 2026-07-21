// // function greeting() {
// //   console.log("Hello Coder Army!");
// //   return 'bye';
// // }

// // console.log(greeting());

// // // recived parameteres here
// // function addNumbers(num1, num2, num3=0, num4=0) {
// //   console.log(num1+num2+num3+num4);
// // }

// // // passed arguments here
// // addNumbers(4, 6, 4);


// // Rest operator ...

// function addNumber(...num) {
//   let sum = 0;
//   for (let n of num) {
//     sum+=n;
//   }

//   console.log(sum);
// }

// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(6,7,8,9,10,11,12);

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,80,90];
// const [first, second,...num] = arr;
// console.log(first,second, num);
// console.log(...arr, ...arr2);

// function: expression : cannot call the function before initialization

// const addNumbers = function(num1, num2) {
//   return num1+num2;
// }

// console.log(addNumbers(1,2));

// addNumbers(2,5);

// function addNumbers(num1, num2) {
//   console.log(num1+num2);
// }


// arrow function

// ()=> {

// }

// const addNumber = (num1, num2)=> {
//   return num1 + num2;
// }

// console.log(addNumber(3,4));

// const addNumber = (num1, num2)=> num1 + num2;

// console.log(addNumber(6,4));

// let arr = [10,11,19,15,9];
// arr.sort((a,b)=>b-a);
// console.log(arr);

// const squareNumber = (num)=> num*num;

// console.log(squareNumber(5));

// if there is only 1 argument value then we dont even need a bracket around parameter
// const cubeNumber = num => num*num*num;

// console.log(cubeNumber(3));


// const greeting = ()=> {
//    return {
//     name: "Shubham",
//     age: 23,
//     email: "shub@gmail.com"
//   }

// }



// const greeting = ()=> { name:"Rohit", age:23}
// this is not allowed when u add curly braces {} u must add a return keyword and return a value
// console.log(greeting());

// const greeting = ()=> ({ name:"Shubham", age:23, email:"shub@gmail.com" });

// console.log(greeting());

// IIFE - Immediately Invoked Function Expression 

// (function greeting() {
//   console.log("Hello ji!");
// })();

// (()=> {
//   console.log("Hi there");
// })();

// function greet(callback) {
//   console.log("Hello ji, Kaise ho");
//   callback();
// }

// function meet() {
//   console.log("I am going to meet someone");
// }

// greet(meet);

function blinkitOrderPlaced() {
  console.log("We have started packing your order");
}

function zomatoOrderPlaced() {
  console.log("We have started preparing your food");
} 
 
function payment(amount, callback) {
  console.log(`${amount} payment has initilized`);
  console.log("Payment is received");
  callback();


}

payment(450, blinkitOrderPlaced);