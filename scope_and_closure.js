// let global = 20;

// function greet() {
//   let global = 10;
//   console.log(global);
// }

// console.log(global);
// greet();



// user.balance="shubham";
// console.log(user.balance);


function createBankAccount() {
  let balance = 500;

const user = {
  deposit: function(amount){
    if (typeof amount==="number" && amount>0) {
    balance+=amount;
    return balance;
  }
},
  withdraw: function(amount){
  if(typeof amount==="number" && amount>0 && balance>=amount) {
    balance-=amount;
    return balance;
  }
},

  getBalance: function() {
    return balance;
  }

}

return user;

}

const customer = createBankAccount();
console.log(customer.withdraw(200));

  
