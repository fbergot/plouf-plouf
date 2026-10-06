const playButton = document.getElementById("play");
const square1 = document.querySelector(".carre1");
const square2 = document.querySelector(".carre2");

const player1 = prompt("Entre le joueur 1");
const player2 = prompt("Entre le joueur 2");

square1.textContent = player1;
square2.textContent = player2;

function random() {
  const mathRandom = Math.random();
  console.log(mathRandom);

  const carre1 = mathRandom > 0 && mathRandom <= 0.5;
  const carre2 = mathRandom > 0.5 && mathRandom <= 1;

  square1.classList.remove("square-selected");
  square2.classList.remove("square-selected");

  if (!carre1) {
    square1.classList.add("square-selected");
  }
  if (!carre2) {
    square2.classList.add("square-selected");
  }

  return { carre1, carre2 };
}

playButton.addEventListener("click", random);
