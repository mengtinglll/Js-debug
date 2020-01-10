function Power(base,exponent) {
    let result = 1;
    if (exponent === 0) {
        return 1;
    }
    if (base === 0){
        return 0;
    }
    absExp = Math.abs(exponent);
    while(absExp){// 也可以用递归做，这里采用了循环
        if(absExp & 1){// 当指数为奇数时，包括了1
            result = result * base;
        }
        base = base * base;
        absExp >>= 1;
    }
    return exponent > 0 ? result : 1/result;
}
print(Power(2,3));
