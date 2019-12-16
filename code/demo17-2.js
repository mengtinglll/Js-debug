/**
 * 用数组模拟大数相加操作
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

/**
 *
 * @param {Number} n
 */
function printMaxDigits(n) {
    if (n <= 0) {
        return;
    }

    let arr = new Array(n).fill(0);
    while (!increase(arr)) {
        let printArr =  PrintNumber(arr)
        console.log(printArr);
    }
}
/**
 * 将数组转成合适的字符串
 * @param {Array} arr
 * @return {string}
 */
function PrintNumber(arr) {
    let isBegining = false;
    for(let i = 0; i<arr.length; i++) {
        if (!isBegining && arr[i] !== 0) {
            isBegining = true;
        }
        if (isBegining) {
            let a = arr.slice(i).join('');
            return a;
        }
    }
}
printMaxDigits(2);
