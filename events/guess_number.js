"use script";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let record = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // если не ввели число
  if (!guess) {
    displayMessage("You didn't write number");
    //когда угадали число
  } else if (guess === secretNumber) {
    displayMessage("You win!!!");
    document.querySelector("body").style.background = "pink";
    document.querySelector(".number").textContent = guess;
    if (score > record) {
      record = score;
      document.querySelector(".record").textContent = record;
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage("Your number is larger");
      score--;
      document.querySelector(".score").textContent = score--;
    } else if (guess < secretNumber) {
      displayMessage("Your number is fewer");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You lost!");
    document.querySelector(".score").textContent = 0;
  }
});
