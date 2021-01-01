let incrementBtn = document.getElementById("increment");

let decrementBtn = document.getElementById("decrement");

let count = document.getElementById("main-count");
let counter = document.getElementById("main-count").textContent;

incrementBtn.onclick = function click() {
  counter++;
  count.innerHTML = counter;
};

decrementBtn.onclick = function decrementClick() {
  counter--;
  count.innerHTML = counter;
};
