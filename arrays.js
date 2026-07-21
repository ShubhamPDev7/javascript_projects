// // Arrays
// let marks = [100,50,80,90];
// console.log(marks);
// console.log(typeof marks);

// let arr = [10,20,"shubham",true];
// console.log(arr);
// console.log(arr[2]);
// arr[2] = "savinaya";
// console.log(arr);

// // .push(); to add/insert element at the end of the array

// arr.push(12);
// arr.push("afra");
// arr.push(false);
// console.log(arr);

// // .pop() delete/remove element from the end of the array

// arr.pop();
// console.log(arr);

// .unshift() : Insert element at the start of the array

// arr.unshift(67);
// arr.unshift("Mavinaya");
// console.log(arr);

// .shift() : Delete element from the start of the array

// arr.shift();
// arr.shift();
// console.log(arr);

// Note:- .shift and .unshift is not advices to use as it can affect the performance of the system because to shift and unshift element system have to reorganize all the element in the array and reposition them.

// Iterating with for loop 

// let arr = [10,30,50,70,11];  

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for of loop

// for (let num of arr) {
//   console.log(num);
// }

// let arr = [10,20,30,40,50];
// let arr2 = arr;
// console.log(arr);
// console.log(arr2);


// arr2.push(60);
// console.log(arr2);
// console.log(arr);

// Changes made in arr2 will be reflected in to orginal array (arr) also cuz cuz they copy each other by refrance (copy by refrance)

// const arr = [10,20,30,40];
// arr.push(12);
// console.log(arr);
// arr = [20,30,40];
// console.log(arr);

// const arr = [10,20,30,40,50,60];
// const arr2 = arr.slice(2,4);
// console.log(arr2);

// // splice() to slice the orignal array

// console.log(arr.splice(1,3,"shubham",23));
// console.log(arr);


// Major differance between slice() and splice() is In slice() we remove the portion but it doesnt make any changes in orignal array , and in splice() we make changes in orignal array

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];

// arr.push(arr2);
// console.log(arr);

// const arr3 = arr.concat(arr2);
// const arr3 = [90,4,false];
// const arr4 = arr.concat(arr2,arr3);
// console.log(arr4);


// spread operator [...]

// const arr4 = [arr,arr2,arr3];
// const arr4 = [...arr,...arr2,...arr3];
// console.log(arr4);

// const names = ["Elis","Dante","Alice","Bob","Charlie","amber"]; //amber will be last cuz it is sorting on basis of ascii value
// console.log(names.toString());

// Join operation  
// console.log(names.join("_"));

// simple search .indexOf()

// console.log(names.indexOf("yash"));
// console.log(names.lastIndexOf("yash"));
// // includes() returns true or false if value is present or absent
// console.log(names.includes("yash"));

// names.sort();
// names.reverse();
// console.log(names);

// sorting numbers

// const arr = [10,40,31,71,5,11];
// arr.sort((a,b)=> a-b);
// console.log(arr);
// for ascending order a-b and for descending order b-a


//  flat() and flat(Infinity)


// const arr = [10,30,50,[40,90,[60,99,19],11], 80];
// const a = arr.flat(Infinity);
// console.log(a);
// console.log(arr[3][2][2]);


// const a = [10,309,"Rohit",9,3,true];
// a.name = "Yash";
// console.log(a);

// IMP NOTE:- Array in javascript is not array its an object