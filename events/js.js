"use strict";

const elem = document.querySelector(".box_1");
const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const elems = document.querySelectorAll(".boxes__box");

for (let value of elems) {
  value.addEventListener("click", function () {
    value.style.backgroundColor = "red";
    audio.play();
  });
}

// elem.addEventListener("click", function () {
//   elem.style.backgroundColor = "red";
//   audio.play();
//   // elem.nextElementSibling.after(elem);
// });

// const elem2 = document.querySelector(".box_2");

// elem2.addEventListener("click", () => {
//   elem2.style.backgroundColor = "yellow";
//   audio.play();
// });

// const elem3 = document.querySelector(".box_3");

// elem3.addEventListener("click", () => {
//   elem3.style.backgroundColor = "green";
//   audio.play();
// });

// const elem4 = document.querySelector(".box_4");

// elem4.addEventListener("click", () => {
//   elem4.style.backgroundColor = "magenta";
//   audio.play();
// });

// const elem5 = document.querySelector(".box_5");

// elem5.addEventListener("click", () => {
//   elem5.style.backgroundColor = "whitegit";
//   audio.play();
// });

// const elem6 = document.querySelector(".box_6");

// elem6.addEventListener("click", () => {
//   elem6.style.backgroundColor = "pink";
//   audio.play();
// });
