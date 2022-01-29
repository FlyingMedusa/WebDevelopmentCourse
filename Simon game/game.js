
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
}

nextSequence()
$("#"+gamePattern[0]).fadeOut(100).fadeIn(100);


makeSound(gamePattern[0]);

function makeSound(color) {

    switch (color) {
        case "red":
            var col1 = new Audio('sounds/red.mp3');
            col1.play();
        break;

        case "blue":
            var col2 = new Audio('sounds/blue.mp3');
            col2.play();
        break;

        case "green":
            var col3 = new Audio('sounds/green.mp3');
            col3.play();
        break;

        case "yellow":
            var col4 = new Audio('sounds/yellow.mp3');
            col4.play();
        break;

        default:
            console.log(gamePattern[0]);
    }
}