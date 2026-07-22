// zomato application  

function placeOrder(callback) {
  console.log("Payment is in progress");

  setTimeout(()=>{
    console.log("Payment is received and order get placed");
    callback();
  },3000);
}

function preparingOrder(callback) {
  console.log("Your food preparation started");

  setTimeout(()=>{
    console.log("Your order is now prepared");
    callback();
  },3000);
}

function pickupOrder(callback){
  console.log("Delivery partner is on a way to pick up order");

  setTimeout(()=>{
    console.log("I havep picked up the order");
    callback();
  },3000);
}

function orderDelivered() {
  console.log("Your order is our for delivery");

  setTimeout(()=>{
    console.log("Your order has been delivered");
  },3000);
}
 
placeOrder(()=>{
  preparingOrder(()=>{
    pickupOrder(()=>{
      orderDelivered();
    });
  });
});