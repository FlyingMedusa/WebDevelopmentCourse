function loveCalculator() {
    var loveScore = Math.random();
    loveScore = Math.floor(loveScore * 100) + 1;

    if (loveScore > 75) {
        alert("Your love score is " + loveScore + "% !" + " Being together is your destiny!");
    } else if (loveScore > 60) {
        alert("Your love score is " + loveScore + "% !" + " You're a cute couple.");
    } else if (loveScore > 40) {
        alert("Your love score is " + loveScore + "% !" + " You're cute together... as friends.");
    } else {
        alert("Your love score is " + loveScore + "% !" + " Forget about it...");
    }
}