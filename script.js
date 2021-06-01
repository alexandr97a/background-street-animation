const sun = document.querySelector('.sun');
const body = document.querySelector('body');
sun.onclick = function(){
  body.classList.toggle('dark')
}

const music = document.querySelector(".music");
music.volume = 0.1;

document.getElementById("car1").addEventListener("wheel", speedUp);

function speedUp() {
  this.style.animation = "car1 4s linear infinite";
}