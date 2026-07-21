// Object
// Key : Value pair
// create
// const user = {
//   name: "Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   course: "Javascript",
//   "home address": "Baramati"
// } 


// console.log(user["home address"]);
// behind the scene the key is stored as string for eg name is stored as "name"

// console.log(user["name"]); //returns value of name ie "shubham"

// read
// console.log(user);

// console.log(user.course);
// add
// user.aadhar = 1234;

//update
// user.course = "Spring Boot";
// console.log(user);

// delete

// delete user.aadhar;
// console.log(user);


// const user = {
//   name: "Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   course: "Javascript",
//   "home address": "Baramati"
// } 

// const user2 = user;
// user2["home address"] = "Kedgaon";
// console.log(user2);
// console.log(user);

// changes made in user2 will be applied to orignal user because objects make copy by refrance

// only print keys of object

// console.log(Object.keys(user));

// only print values of object
// console.log(Object.values(user));

// print both in an array

// console.log(Object.entries(user)); 

// Iterating using for in loop

// for (let keys in user) {
//   console.log(keys, ':', user[keys]);
// }

// Destructuring of the object

// const user = {
//   name: "Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   course: "Javascript",
//   "home address": "Baramati"
// } 

// const {name:userName, age:userAge} = user;

// console.log(userName, userAge);

// same way u can also destructure array , make sure to use square bracket for array []

// const arr = [10,20,30,40];

// const [first, second] = arr;

// console.log(first, second);

// const user = {
//   name: "Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   course: "Javascript",
//   "home address": "Baramati"
// } 


// iterating using for of loop

// for (let keys of Object.keys(user)) {
//   console.log(keys);
// }

// for (let values of Object.values(user)) {
//   console.log(values);
// }

// for (let keyAndValues of Object.entries(user)) {
//   console.log(keyAndValues);
// }


// const user = {
//   name: "Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   amount: 5000,
//   greeting: function() {
//     console.log(`${this.name} is coming`);
//     return 20;
//   }
// } 

// const user2 = {
//   name: "Mohan",
//   age: 24
// }

// user2.greeting = user.greeting;

// console.log(user2);
// user2.greeting();

// const va = user.greeting();
// console.log(va);

// Nested Object ---->

// const user = {
//   name:"Shubham",
//   age: 23,
//   emailId: "shubham@gmail.com",
//   address: {
//     city: "Baramati",
//     state: "Maharashtra",
//     pincode: 413102
//   }
// }

// console.log(user.address.pincode)
// console.log(user);

// make Independent copy of object using spread operator {...}

//  shallow copy
// const user2 = {...user};
// user2.name = "Yash";
// console.log(user2);
// console.log(user);

// // here is the catch -->

// user2.address.city = "Daund";
// console.log(user); //Spread operator only works on 1 level it doenst handle nested objects

// Deep Copy

// const user2 = structuredClone(user);

// user2.name = "Yash";
// user2.address.city = "Daund";
// console.log(user);
// console.log(user2);

const sym = Symbol("id");

const user = {
  name: "shubham",
  age: 23,
  0: "shu",
  1: "bham",
  [sym]: "Hello ji"
}

console.log(user[sym]);

// console.log(user[0]);