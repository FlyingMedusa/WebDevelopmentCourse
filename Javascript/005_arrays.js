var guestList = ["Martha", "Eveline", "Victoria", "Agatha"];

var userName = prompt("What is your name?");

if (guestList.includes(userName)) {
    alert("Welcome");
} else {
    alert("Access denied.");
}