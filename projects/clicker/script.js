const body = document.querySelector('body');
body.addEventListener('click',(e)=>{


  const circleElement = document.createElement('div');

  circleElement.classList.add('circle');

  const color = ['red','blue','orange','green','pink','purple'];
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

  circleElement.style.top = `${e.clientY}px`;
  circleElement.style.left = `${e.clientX}px`;

  circleElement.textContent = "Hi";
  body.append(circleElement);
  setTimeout(()=>{
    circleElement.remove();
  },5000)
})