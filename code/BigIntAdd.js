//BigIntAdd.js
/**
 * 用字符串模拟大数相加操作
 * @param {String} a
 * @param {String} b
 * @return {String} 输出去掉前'0'的加法结果
 */
function sumStrings(a,b){
    let res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

/**
 * 用数组模拟大数相加操作
 * @param {Array} a
 * @param {Array} b
 * @return {String} 输出去掉前'0'的加法结果
 */
function sumArray(a,b) {
    let c = 0;
    let res ='';
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

/**
 * 模拟大数相加操作（包括负数）
 * @param {String}  a
 * @param {String} b
 * @return {String} 输出去掉前'0'的加法结果
 */
function sum(a, b) {
    let res = '', temp = 0, aSymbol = '', bSymbol = '', num1, num2, lastSymbol = '';
    console.log('a:',parseInt(a, 10));
    console.log('b:',parseInt(b, 10))
    if (a < 0) {
        aSymbol = '-';
        a = a.substring(1);
    }

    if (b < 0) {
        bSymbol = '-';
        b = b.substring(1);
    }
    let aArr = a.split('');
    let bArr = b.split('');

    while (aArr.length || bArr.length || temp) {
        if (aSymbol === bSymbol) {
            temp += ~~aArr.pop() + ~~bArr.pop();
            res = temp % 10 + res;
            temp = temp > 9 ? 1 : 0;
            lastSymbol = aSymbol;
        } else {
            num1 = ~~aArr.pop();
            num2 = ~~bArr.pop();
            if (parseInt(a, 10) < parseInt(b, 10)) {
                temp += num2 - num1;
                if (temp < 0) {
                    temp += 10;
                    res = temp % 10 + res;
                    temp = -1;
                } else {
                    res = temp % 10 + res;
                    temp = 0;
                }
                lastSymbol = bSymbol;
            } else {
                temp += num1 - num2;
                if (temp < 0) {
                    temp += 10;
                    res = temp % 10 + res;
                    temp = -1;
                } else {
                    res = temp % 10 + res;
                    temp = 0;
                }
                if (parseInt(a, 10) < parseInt(b, 10)) {
                    lastSymbol = aSymbol;
                }
            }
        }
    }
    res = res.replace(/^0+/, '');
    if (!res) {
        res = '0';
    } else {
        res = lastSymbol + res;
    }
    return res
}

/**
 * 用数组模拟大数加1
 * @param {Array} arr
 * @return {Boolean} true, 超出arr.length位最大整数; false, 没有超出arr.length位最大整数
 */
function increase(arr) {
    let length = arr.length,
        over = 0; // 记录前一位相加后的进位数

    for (let i = length - 1; i >= 0; --i) {
        arr[i] = arr[i] + over;

        if (i === length - 1) {
            arr[i] += 1;
        }

        if (arr[i] >= 10) {
            // 如果第n位进位，说明超出了n位最大数字
            if (i === 0) {
                return true;
            }

            arr[i] = arr[i] - 10;
            over = 1;
        } else {
            break;
        }
    }

    return false;
}



let a = '-100';
let b = '1';
console.log(sum(a,b));
