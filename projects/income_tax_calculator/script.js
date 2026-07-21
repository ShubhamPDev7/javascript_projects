const parent = document.getElementById("parent");
parent.addEventListener('submit',(e)=>{
  e.preventDefault();
  const income = document.getElementById("income");
  let getIncome = income.value;
  // console.log(getIncome);
  if (getIncome>0 && getIncome<1200000) {
    const tax = 0;
    const displayTax = document.querySelector('h2').textContent = `Total Tax: ${tax}`;
  } else if (getIncome>1200000 && getIncome<1600000) {
    getIncome -= 1200000;
    const tax = (getIncome / 100) * 15;
    const displayTax = document.querySelector('h2').textContent = `Total Tax: ${tax}`;
  } else if (getIncome>1600000 && getIncome<2000000) {
    getIncome -= 1200000;
    const tax = (getIncome / 100) * 20;
    const displayTax = document.querySelector('h2').textContent = `Total Tax: ${tax}`;
  } else if (getIncome>2000000 && getIncome<2400000) {
    getIncome -= 1200000;
    const tax = (getIncome / 100) * 25;
    const displayTax = document.querySelector('h2').textContent = `Total Tax: ${tax}`;
  } else if (getIncome > 3000000) {
    getIncome -= 1200000;
    const tax = (getIncome / 100) * 30;
    const displayTax = document.querySelector('h2').textContent = `Total Tax: ${tax}`;
  } else {
    document.querySelector('h2').textContent = "Please Enter valid income";
  }
  const form = document.querySelector('form').reset();
})