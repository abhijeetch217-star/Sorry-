let pages = document.querySelectorAll('.page');
let index = 0;

function nextPage(){
  pages[index].classList.remove('active');
  index++;
  pages[index].classList.add('active');
}

function moveBtn(btn){
  let x = Math.random()*200 - 100;
  let y = Math.random()*200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
  btn.innerText = "Aree paglu tum ho 💖";
}
