/**
 * 将奇数调整到偶数前面。但是不能实现偶数与偶数，奇数与奇数的相对位置不变
 * @param array
 * @returns {*}
 */

function reOrderArray(array) {
    if (array.length === 0) {
        return;
    }
    let pBegin = 0;
    let pEnd = array.length - 1;
    while (pBegin < pEnd) {
        while (pBegin < pEnd && (array[pBegin] & 0x1) !== 0) {
            pBegin++;
        }
        while (pBegin < pEnd && (array[pEnd] & 0x1) === 0) {
            pEnd--;
        }
        if (pBegin < pEnd) {
            [array[pBegin],array[pEnd]] = [array[pEnd],array[pBegin]];
        }
    }
    return array;
}
print(reOrderArray([1,2,3,4,5,6,7]))