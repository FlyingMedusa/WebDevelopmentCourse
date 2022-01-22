var names = ["Martha", "Eveline", "Victoria", "Agatha"];

function whosPaying(names) {
    var randomName = names[Math.floor(Math.random() * (names.length))];
    return randomName + " is going to buy lunch today!";
}

alert(whosPaying(names));