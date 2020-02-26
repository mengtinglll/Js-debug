function LeftRotateString(str, n) {
    if (str === null || str.length === 0) return '';
    console.log(n);
    n = n % str.length;
    console.log(str.slice(n),str.slice(0, n));
    return str.slice(n) + str.slice(0, n);
}
console.log(LeftRotateString('google',2));
