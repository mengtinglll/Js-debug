function cutRope (number) {
    if (number < 2 )
        return 0;
    if (number === 2)
        return 1;
    if (number === 3)
        return 2;
    let timesOf3 = Math.floor(number / 3);
    if (number - timesOf3 * 3 === 1) {
        timesOf3 = timesOf3 - 1;
    }
    let timeOf2 = Math.floor((number - timesOf3 * 3) / 2);
    return Math.pow(3,timesOf3 ) * Math.pow(2, timeOf2 );

}

print(cutRope(10));
