const newElement = document.createElement("h2");
newElement.textContent = "Shubham got job as backend developer";
newElement.id = "second";

// const element = document.getElementById("first");
// // element.after(newElement);
// // element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Happy Diwali!";
// newElement2.id = "third";
// // newElement2.className = "diwali";
// // newElement2.className += " holi";

// newElement2.classList.add("diwali");
// newElement2.classList.add("holi");

// console.log(newElement2);

// newElement2.style.backgroundColor = "pink";
// newElement2.style.fontSize = "40px";
// newElement2.setAttribute("hello","ji");

// element.before(newElement2);

// console.log(newElement2.getAttribute("hello"));

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Bread";

// const list3 = document.createElement("li");
// list3.textContent = "Eggs";

// const list4 = document.createElement("li");
// list4.textContent = "Paneer";

// const unorderElement = document.getElementById("listing");

// unorderElement.append(list, list2); 
// unorderElement.prepend(list3);
// unorderElement.children[1].after(list4);

// const arr = ["Milk", "Halwa", "Eggs", "Bread", "Paneer"];

// const unorderElement = document.getElementById("listing");

// for (let food of arr) {
//   const list = document.createElement("li");
//   list.textContent = food;
//   unorderElement.append(list);
// }


const arr = ["Milk", "Halwa", "Eggs", "Bread", "Paneer"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();

for (let food of arr) {
  const list = document.createElement("li");
  list.textContent = food;
  fragment.append(list);
}

unorderElement.append(fragment);

const s1 = document.getElementById("first");
s1.remove();

const mon = document.getElementById("ten");
console.log(mon.children);

const lister = document.createElement("li");
lister.textContent = "Help";

mon.insertAdjacentElement("beforeend", lister);

lister.innerHTML = `
  <img src="https://th.bing.com/th/id/OIP.enHnJ33r9erP04V1MdL9iwHaE7?r=0&o=7&rm=3&rs=1&pid=ImgDetMain&o=7&rm=3">
`;