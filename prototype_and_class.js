// const obj = {
//   name:"Shubham",
//   age:23,
//   greet: function(){
//     console.log("Hello Ji");
//   }
// };

// // console.log(obj.hasOwnProperty("name"));

// const obj2 = {
//   account:300
// };

// obj2.__proto__ = obj;

// const obj3 = {
//   id:231
// };

// obj3.__proto__ = obj2;

// console.log(obj3.greet());
 

// Class

// const obj1 = {
//   name:"Shubham",
//   age:23,
//   gree:function(){
//     console.log(`Hello ${this.name}`);
//   }
// };

// const obj1 = {
//   name:"Shubham",
//   age:23,
//   gree:function(){
//     console.log(`Hello ${this.name}`);
//   }
// };


// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   sayHi(){
//     console.log(`Hi ${this.name}`);
//   }
// }

// const person1 = new Person("Shubham",23);
// console.log(person1.name);
// const person2 = new Person("Savinaya",21);
// console.log(person2.name, person2.age);

// person2.sayHi();
// person1.sayHi();

// class Person{
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi(){
//     console.log(`Hi ${this.name}`);
//   }
// }

// const person1 = new Person("Yash",22);
// console.log(person1.name, person1.age);
// person1.sayHi();

// const person2 = new Person("Abhi",23);
// console.log(person2.name, person2.age);
// person2.sayHi();


// class Customer{
//   constructor(name,ac,balance,password) {
//     this.name = name;
//     this.ac = ac;
//     this.balance = balance;
//     this.password = password;
//   }

//   checkBalance(password) {
//     if(password === this.password) {
//       console.log(`dear ${this.name} your account balance is ${this.balance}`);
//     } else if (password == null) {
//       console.log("Please enter password");
//     } else {
//       console.log("Wrong credentials");
//     }
//   }
// }

// const customer1 = new Customer("Shubham",112233,3900,1234);
// // customer1.checkBalance(1234);

// class User extends Customer{
//   constructor(name,age,ac,balance,password) {
//     super(name,ac,balance,password); // super keyword is used when u have to call the parent constructor
//     this.age = age;
//   }
// }

// const user1 = new User("Yash",23,221144,1233,12345);
// user1.checkBalance(12345);

const obj = {
  name:"Shubham",
  age:23
}

const obj2 = Object.create(obj);
obj2.account = 10;

console.log(obj2.name);