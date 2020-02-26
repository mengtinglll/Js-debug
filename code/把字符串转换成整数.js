function StrToInt(str)
{
    let res = 0;
    let flag = 1;
    // 有负号
    if (str[0] === '-') {
        flag = -1;
    }
    for (let i = (str[0] === '+' || str[0] === '-' )? 1:0; i<str.length; i++) {
        if (str[i]<'0' || str[i]>'9') {
            return 0;
        }
        res =+ res*10 + str[i]*1;
    }
    let temp = res*flag;
    // int整数的范围
    if(temp<-2147483648||temp>2147483647) {
        return 0
    }
    return temp;
}
console.log(StrToInt('+6666666666666666'));
