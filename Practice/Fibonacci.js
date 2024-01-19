//Without the use of Recursion:
var fibonacci = function (n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (ans.length == 0 && i == 0) {
            ans.push(0);
        }
        if (ans.length == 1 && i == 1) {
            ans.push(1);
        }
        if (i > 1) {
            ans[i] = ans[i - 2] + ans[i - 1];
        }
    }
    console.log("The Fibonacci sequence for " + n + " terms is(Without Recursion): " + ans);
}
fibonacci(7);

// With the use of Recursion:
var recursiveFibonacci = function (n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

let recans = recursiveFibonacci(6);
console.log(recans)