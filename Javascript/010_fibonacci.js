function fibonacciGenerator(n) {
    var all = [];

    for (i = 1; i <= n; i++) {
        if (i === 1) {
            all.push(0);
        } else if (i === 2) {
            all.push(1);
        } else{
            all.push(all[all.length-2] + all[all.length-1]);
        }
    }
    return all;
}

console.log(fibonacciGenerator(10));