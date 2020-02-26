// match方法
function FirstNotRepeatingChar(str)
{
    if(str.length < 0 || str.length > 10000) {
        return -1;
    }
    for (let ch of str) {
        const reg = new RegExp(ch,'g')
        if (str.match(reg)) {
            if (str.match(reg).length === 1) {
                return str.indexOf(ch);
            }
        }
    }
    return -1;
}
console.log(FirstNotRepeatingChar('google'));
console.log(FirstNotRepeatingChar('googllee'));

// indexOf方法
function FirstNotRepeatingChar2(str)
{
    if(str.length < 0 || str.length > 10000) {
        return -1;
    }
    for (let ch of str) {
        let index1 = str.indexOf(ch);
        let index2 = str.lastIndexOf(ch);
        if (index1 === index2) {
            return index1;
        }
    }
    return -1;
}
console.log(FirstNotRepeatingChar2('google'));
console.log(FirstNotRepeatingChar2('googllee'));
