function rectCover(number)
{
    if (number <= 0){
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
console.log(rectCover(0));
console.log(rectCover(1));
console.log(rectCover(2));
console.log(rectCover(3));
console.log(rectCover(4));
