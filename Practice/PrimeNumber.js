var primeNumber = function (n) {
    let primeCheck = true;
    for (let i = 2; i < Math.floor(n / 2); i++) {
        if (n % i == 0) {
            primeCheck = false;
            break;
        }
    }
    console.log(primeCheck);
}

primeNumber(11);