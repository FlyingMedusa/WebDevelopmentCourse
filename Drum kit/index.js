
var audio = new Audio('sounds/tom-1.mp3');

for (var i=0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
} 


document.querySelectorAll(".drum")[0].addEventListener("click", audio.play);

function handleClick() {
    audio.play();
}