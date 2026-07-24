const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const text = input.value.trim();

  if(text=="") 
    return;

  const parent = document.createElement('div');
  const task = document.createElement('span');
  task.textContent = text;

  task.style.marginRight = "20px";

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Done";
  deleteButton.textContent = "Delete";

  const doneButton = document.createElement('button');

  


  doneButton.style.marginRight = "10px";

})