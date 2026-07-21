const div = document.querySelector('div');
setInterval(()=>{
  let time = new Date( );
  time =  time.toLocaleTimeString();
  div.textContent = time.toUpperCase();
},1000)
