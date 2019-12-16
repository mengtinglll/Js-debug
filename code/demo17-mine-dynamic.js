function cutRope (number) {
    if (number < 2 )
        return 0;
    if (number === 2)
        return 1;
    if (number === 3)
        return 2;
    const results = Array(number+1);
    results[0] = 0;
    results[1] = 1;
    results[2] = 2;
    results[3] = 3;
    for (let i = 4;i <= number; i++) {
        let max = 0;
        for (let j = 1;j <= i/2; j++) {
            let result = results[j]*results[i-j];
            if (result > max) {
                max = result;
            }
            results[i] = max;
        }
    }
    return results[number];
}
print(cutRope(10));
