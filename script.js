let pages = document.querySelectorAll(".page");
let index = 0;

function nextPage(){
  pages[index].classList.remove("active");
  index++;
  pages[index].classList.add("active");
}

function yes(){
  nextPage(); // goes to happy page
}

function runAway(btn){
  let x = Math.random()*260 - 130;
  let y = Math.random()*180 - 90;
  btn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*20 - 10}deg)`;
  btn.innerText = "Aree paglu tum ho 💖";
}
