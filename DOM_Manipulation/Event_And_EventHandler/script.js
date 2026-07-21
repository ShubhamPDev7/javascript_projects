// // function handleClick() {
// //   const element = document.getElementById("first");
// //   element.textContent = "Strike is coming";
// // }

// const element = document.getElementById("first");
// // element.onclick = function handleClick() {
// //   element.textContent = "Strike is coming";
// // }

// // element.addEventListener('click',()=> {
// //   element.textContent = "Strike is coming";
// // })

// // element.addEventListener('click',()=> {
// //   element.style.backgroundColor = "brown";
// // })

// // element.addEventListener('dblclick',()=>{
// //   element.textContent = "Strike is coming";
// // })

// // element.addEventListener('mouseenter',()=>{
// //   element.textContent = "Strike is coming";
// // })


// // element.addEventListener('mouseleave',()=>{
// //   element.textContent = "Strike is coming";
// // })


// // const child1 = document.getElementById("child1");
// // child1.addEventListener('click', ()=> {
// //   child1.textContent = "I am clicked";
// // })

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e) {
  e.target.textContent = "I am clicked";
  parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick);


// for(let child of parent.children) {
//   console.log(child);
//   child.addEventListener('click',(e)=>{
//     console.log(e.target);
//     child.textContent = "I am clicked";
//   })
// }

// const grandParent = document.getElementById("grandparent");
// grandParent.addEventListener('click',(e)=>{
//   e.stopPropagation();
//   console.log(e.target);
//   console.log("GrandParent is clicked");
// },true)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//   // e.stopPropagation();
//   // console.log(e);
//   console.log("Parent is clicked");
// },false)

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//   // e.stopPropagation();
//   // console.log(e);
//    console.log("Child is clicked");
// },true)