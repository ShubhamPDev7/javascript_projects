// forEach, filter, reducer, map, set

// forEach loop

// const arr = [10,20,30,40,50,60];
// let sum = 0;
// arr.forEach((number)=>{
//   sum += number;
 
// })

//  console.log(sum);

// filter

// const arr = [10,20,30,40,50,60];

// const arr2 = arr.filter((number)=> number>25);

// console.log(arr2);

// Array.prototype.filtering = function(compare){
//   const ans = [];
//   for(let num of this) {
//     if(compare(num)) {
//       ans.push(num);
//     }
//   }
//   return ans;
// }

// const newArr = arr.filtering((num)=> num>25);
// console.log(newArr);

// const arr3 = [10,23,45,67,89];
// const a = arr3.filtering((num)=> num>25);
// console.log(a);

// Map : returns new array

// const arr = [10,20,30,40,50];

// const newArr = arr.map((num)=> num*2);

// console.log(arr);
// console.log(newArr);

const products = [
    // Electronics
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
    { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
    { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

    // Books
    { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
    { id: 7, name: "Atomic Habits", category: "Books", price: 20, inStock: true },
    { id: 8, name: "Clean Code", category: "Books", price: 35, inStock: false },
    { id: 9, name: "The Alchemist", category: "Books", price: 18, inStock: true },
    { id: 10, name: "Rich Dad Poor Dad", category: "Books", price: 22, inStock: true },

    // Clothing
    { id: 11, name: "T-Shirt", category: "Clothing", price: 15, inStock: true },
    { id: 12, name: "Jeans", category: "Clothing", price: 40, inStock: false },
    { id: 13, name: "Jacket", category: "Clothing", price: 80, inStock: true },
    { id: 14, name: "Sneakers", category: "Clothing", price: 100, inStock: true },
    { id: 15, name: "Cap", category: "Clothing", price: 12, inStock: true },

    // Groceries
    { id: 16, name: "Rice", category: "Groceries", price: 30, inStock: true },
    { id: 17, name: "Milk", category: "Groceries", price: 3, inStock: true },
    { id: 18, name: "Eggs", category: "Groceries", price: 6, inStock: false },
    { id: 19, name: "Bread", category: "Groceries", price: 4, inStock: true },
    { id: 20, name: "Butter", category: "Groceries", price: 5, inStock: true },

    // Furniture
    { id: 21, name: "Chair", category: "Furniture", price: 60, inStock: true },
    { id: 22, name: "Table", category: "Furniture", price: 150, inStock: false },
    { id: 23, name: "Sofa", category: "Furniture", price: 500, inStock: true },
    { id: 24, name: "Bookshelf", category: "Furniture", price: 120, inStock: true },
    { id: 25, name: "Bed", category: "Furniture", price: 700, inStock: false }
];

// const filteredPrice = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price);
// console.log(filteredPrice);

// const newArr = products.filter((product)=> product.inStock===false);
// console.log(newArr);

// const newArr = products.map((product)=> ({name:product.name, price:product.price}));

// console.log(newArr);

// Reducer

// const totalPrice = products.reduce((accumulator,currentValue)=>{
//     if (currentValue.inStock)
//     return accumulator+currentValue.price;
//     else
//     return accumulator;
// },0)

// console.log(totalPrice);


// Set Data structure

// const arr = [10,12,12,34,34,50,67,67,89,10];
// console.log(arr);

// const s1 = new Set(arr);
// s1.add(220);
// console.log(s1.has(334));
// s1.delete(10);
// console.log(s1);

// s1.clear();
// console.log(s1.size);


// const email = ["shub@gmail.com", "shub@gmail.com", "savu@gmail.com", "savu@gmail.com"];

// const uniqueEmail = [...new Set(email)];
// console.log(uniqueEmail);

// Map Data structure

const m1 = new Map([
    ["Shubham",40],
    [2, "Savinaya"],
    [true, 11],
    [[10,30,50], "Shreyash"]
]);

// console.log(m1);
// m1.set({name:"Manish",age:20}, false);
// console.log(m1);

// console.log(m1.has("Shubham"));
// m1.delete("Shubham");
// console.log(m1);

// m1.clear();
// console.log(m1); 
// console.log(m1.size);

for (let [key,value] of m1) {
    console.log(key, value);
}