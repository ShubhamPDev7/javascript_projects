
// // async function always return a promise

// async function greet() {
//   // return "Shubham";

//   return new Promise((resolve,reject)=>{
//     resolve("Shubham");
//   })
// }

// const response = greet();

// // console.log(response);

// response.then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log("Error:", error);
// })

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

// async await -->

// async function github() {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();
//   console.log(data);
// }

// github();

// console.log("Hello");

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
 
async function ordering() {
  const response1 = await placeOrder(orderDetail);
  const response2 = await preparingOrder(response1);
  const response3 = await pickupOrder(response2);
  const response4 = await orderDelivered(response3);
  console.log(response4);
}


ordering();