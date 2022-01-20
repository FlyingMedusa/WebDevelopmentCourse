function getMilk(money, cost) {
    var bottles = Math.floor(money / cost);
    var total = cost * bottles;
    console.log("leave House");
    console.log("move right");
    console.log("move up");
    console.log("buy " + bottles + " bottles of milk");
    console.log("pay " + total + " dollars");
    console.log("get milk");
    return money - total;
}


var change = getMilk(5, 1.5);
console.log("You have " + change + " dollar(s) left");