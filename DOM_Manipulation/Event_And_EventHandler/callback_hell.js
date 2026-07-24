// zomato application  


const orderDetail = {
  orderId: 123123,
  food: ["Pizza","Biryani","Coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Karkhel",
  restaurant_location: "Baramati"
}

function placeOrder(orderDetail, callback) {
  console.log(`${orderDetail.cost} Payment is in progress`);

  setTimeout(()=>{
    console.log("Payment is received and order get placed");
    orderDetail.status = true;
    callback(orderDetail);
  },3000);
}

function preparingOrder(orderDetail, callback) {
  console.log(`Your food ${orderDetail.food} preparation started`);

  setTimeout(()=>{
    console.log("Your order is now prepared");
    callback(orderDetail);
  },3000);
}

function pickupOrder(orderDetail, callback){
  console.log(`Delivery partner is on a way to ${orderDetail.restaurant_location} pick up order`);

  setTimeout(()=>{
    console.log("I havep picked up the order");
    callback(orderDetail);
  },3000);
}

function orderDelivered(orderDetail) {
  console.log(`Your order id: ${orderDetail.orderId} is our for delivery`);

  setTimeout(()=>{
    console.log(`Your order has been delivered to location: ${orderDetail.customer_location}`);
  },3000);
}
 
placeOrder(orderDetail, (orderDetail)=>{
  preparingOrder(orderDetail, (orderDetail)=>{
    pickupOrder(orderDetail, (orderDetail)=>{
      orderDelivered(orderDetail);
    });
  });
});