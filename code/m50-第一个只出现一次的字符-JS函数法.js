// 输出第一个值出现一次的字符
function FirstNotRepeatingChar(str)
{
    for (let ch of str) {
        const reg = new RegExp(ch,'g')
        if (str.match(reg).length === 1) {
            return str.indexOf(ch);
        }
    }
    return -1;
}
console.log(FirstNotRepeatingChar('google'));
console.log(FirstNotRepeatingChar('googllee'));
// 输出第一个只出现一次的字符的下标位置

