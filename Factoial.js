var factorial = function (n) {
    let ans = 1;
    if (n == 0 || n == 1) {
        console.log(ans);
    }
    else {
        for (let i = n; i > 1; i--) {
            ans = ans * i;
        }
        console.log("The factorial of " + n + " is(Without Recursion):" + ans);
    }
}

factorial(5);