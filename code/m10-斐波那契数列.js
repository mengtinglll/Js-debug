function Fibonacci(n) {
    let result = [0,1];
    if (n < 2) {
        return result[n];
    }
    let n1 = 0;
    let n2 = 1;
    let res = 0;
    for (let i=2; i<=n; i++) {
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }
    return res;
}
console.log(Fibonacci(6));
