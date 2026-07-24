// console.log("Hello world start");

// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response)=>{
//   return response.json();
// })

// p2.then((response)=>{
//   console.log(response);
// })

// console.log("Hello world end");

// promise chaining -->

// fetch("https://api.github.com/uers")
// .then((response)=>{

//   if(!response.ok) {
//     throw new Error("Data is not present in server");
//   }
//   return response.json();
// })
// .then((data)=>{
//   // console.log(data);
//   const parent = document.getElementById("first");
// for (let i=0; i<data.length; i++){
// const image = document.createElement('img');
// image.src = data[i].avatar_url;
// image.style.height = "130px";
// image.style.width = "130px";
// image.style.marginRight = "5px";

// parent.append(image);
// }
// })
// .catch((error)=>{
//   const parent = document.getElementById("first");
//   parent.textContent = error.message;
// })


// JSON = Javascript Object Notation

// const obj = {
//   name: "shubham",
//   age: 23,
//   email: "shub@gmail.com"
// }

// obj.name = "yash";
// obj.age = 22;

// console.log(obj);


// javascript object and javascript object notation is different 
// 1: you can not write undefined in json
// 2: you can not write a function inside json 


// const j1 = {
//   name: "Shubham",
//   age: 23,
//   email: "shub@gmail.com",
//   address: "Baramati",
//   c: undefined // will be ignored by JSON
// }

// const jsonFormat =JSON.stringify(j1);

// console.log(jsonFormat);

// const jsonFormat = `{
//   "name": "Shubham",
//   "age": 23,
//   "address": "Baramati"
// }`;

// const jsObject = JSON.parse(jsonFormat);
// console.log(jsObject);

// Creating promise

// const p1 = new Promise((resolve,reject)=>{
//   resolve({
//     name:"Rohit",
//     age: 30
//   });
// })

// p1.then((response)=>{
//   console.log(response);
// }).catch((error)=>{
//   console.log(error);
// })


const orderDetail = {
  orderId: 123123,
  food: ["Pizza","Biryani","Coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Karkhel",
  restaurant_location: "Baramati"
}

function placeOrder(orderDetail) {
  console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
    console.log("Payment is received and order get placed");
    orderDetail.status = true;
    resolve(orderDetail);
  },3000);
    }) 
      
}

function preparingOrder(orderDetail) {
  console.log(`Your food ${orderDetail.food} preparation started`);

  return new Promise((resolve,reject)=>{
       setTimeout(()=>{
    console.log("Your order is now prepared");
    resolve(orderDetail);
  },3000);
  })

 
}

function pickupOrder(orderDetail){
  console.log(`Delivery partner is on a way to ${orderDetail.restaurant_location} pick up order`);

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("I have picked up the order");
    resolve(orderDetail);
  },3000);
  })

  
}

function orderDelivered(orderDetail) {
  console.log(`Your order id: ${orderDetail.orderId} is our for delivery`);

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log(`Your order has been delivered to location: ${orderDetail.customer_location}`);
    resolve(orderDetail);
  },3000);
  })

  
}
 
placeOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>orderDelivered(orderDetail))
.then((orderDetail)=>{
  console.log(orderDetail);
})
.catch((error)=>{
  console.log("Error: ", error.message);
})
.finally(()=>{
  console.log("I am doing cleanup");
})