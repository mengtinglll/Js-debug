function jumpFloor(number)
{
    if (number <=0 ) {
        return null;
    }
    if (number === 1) {
        return 1;
    }
    if (number === 2) {
        return 2;
    }
    let n1 = 1;
    let n2 = 2;
    let res = 0;
    for (let i=3; i<=number; i++) {
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }
    return res;
}
// console.log(jumpFloor(4));
// 简洁方法

function jumpFloor2(number) {
    if (number <=0 ) {
        return null;
    }
    let f = 1;
    let g = 2;
    while (--number) {
        g += f;
        f = g - f;
    }
    return f;
}
console.log(jumpFloor2(4));
