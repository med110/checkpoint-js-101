var plus_buttons = document.querySelectorAll(".plus");
var minus_buttons = document.querySelectorAll(".minus");
var like_buttons = document.querySelectorAll(".like");
var delete_buttons = document.querySelectorAll(".delete");
var allPrices = document.querySelectorAll(".price");
var totalPrice = document.querySelector("#total");
function sum() {
  var somme = 0;
  for (let i = 0; i < allPrices.length; i++) {
    somme += Number(allPrices[i].innerHTML);
  }
  totalPrice.innerHTML = somme;
}

function inc(e) {
  var clickedButton = e.target;
  var div = clickedButton.parentElement;
  var paragraph = div.querySelector("p");

  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  var tr = div.parentElement.parentElement;
  var price = tr.querySelector(".price");
  var unitPrice = tr.querySelector(".unitPrice");
  price.innerHTML = value * Number(unitPrice.innerHTML);
  sum();
}

function dec(e) {
  var clickedButton = e.target;
  var div = clickedButton.parentElement;
  var paragraph = div.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
  }
  paragraph.innerHTML = value;
  var tr = div.parentElement.parentElement;
  var price = tr.querySelector(".price");
  var unitPrice = tr.querySelector(".unitPrice");
  price.innerHTML = value * Number(unitPrice.innerHTML);
  sum();
}
function flike(e) {
  var likeButton = e.target;
  if (likeButton.style.color != "red") {
    likeButton.style.color = "red";
  } else {
    likeButton.style.color = "#424242";
  }
}
function fdelete(e) {
  var clikedIcon = e.target;
  var tr = clikedIcon.parentElement.parentElement.parentElement.parentElement;
  var deletedPrice = tr.querySelector(".price");
  deletedPrice.innerHTML = 0;
  sum();
  tr.remove();
}

for (let i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", inc);
}
for (let i = 0; i < plus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", dec);
}
for (let i = 0; i < delete_buttons.length; i++) {
  delete_buttons[i].addEventListener("click", fdelete);
}
for (let i = 0; i < like_buttons.length; i++) {
  like_buttons[i].addEventListener("click", flike);
}
