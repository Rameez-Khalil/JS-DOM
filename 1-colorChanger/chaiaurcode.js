// Getting the references.
const greyButton = document.querySelector("#grey");
const whiteButton = document.querySelector("#white");
const blueButton = document.querySelector("#blue");
const yellowButton = document.querySelector("#yellow");
const resetButton = document.querySelector("#reset");

//Event listeners.
greyButton.addEventListener("click", greyColor);
whiteButton.addEventListener("click", whiteColor);
blueButton.addEventListener("click", blue);
yellowButton.addEventListener("click", yellow);
resetButton.addEventListener("click", reset);
//Callbacks.
function greyColor() {
  document.body.style.backgroundColor = "grey";
}
function whiteColor() {
  document.body.style.backgroundColor = "white";
}
function blue() {
  document.body.style.backgroundColor = "blue";
}
function yellow() {
  document.body.style.backgroundColor = "yellow";
}
function reset() {
  document.body.style.backgroundColor = "#fff";
}
