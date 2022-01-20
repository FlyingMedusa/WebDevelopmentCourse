function bmiCalculator (weight, height) {
    var score = weight / (height)**2;
    return Math.round(score);
}

alert(bmiCalculator(65, 1.8));