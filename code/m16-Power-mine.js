function Power(base, exponent)
{
    // 底数为0
    if (!base) {
        return 0;
    }
    let absExp = Math.abs(exponent);
    return exponent < 0 ? 1/unsignedPower(base,absExp) : unsignedPower(base,absExp);
}
function unsignedPower(base, exponent) {
    if (exponent === 0){
        return 1;
    } else if(exponent === 1) {
        return base;
    }
    let result = Power(base, exponent >> 1);
    result = result * result;
    if ((exponent & 1) === 1) {
        result = result * base;
    }
    return result;
}
print(Power(0,5));
