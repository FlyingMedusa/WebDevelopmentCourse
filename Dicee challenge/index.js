var diceImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = diceImg[Math.floor(Math.random() * 6)];
var randomNumber2 = diceImg[Math.floor(Math.random() * 6)];

document.querySelector(".img1").setAttribute("src", randomNumber1);
document.querySelector(".img2").setAttribute("src", randomNumber2);