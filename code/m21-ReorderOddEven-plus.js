function reOrderArray(array) {
    return Recorder(array,isEven)
}

/**
 * 通用函数，根据是否满足func函数要求，将数组分为两个部分
 * @param array
 * @param func
 * @returns {*}
 * @constructor
 */
const Recorder = (array, func) => {
    if (array.length === 0) {
        return;
    }
    let pBegin = 0;
    let pEnd = array.length - 1;
    while (pBegin < pEnd) {
        while (pBegin < pEnd && !func(array[pBegin])) {
            pBegin++;
        }
        while (pBegin < pEnd && func(array[pEnd])) {
            pEnd--;
        }
        if (pBegin < pEnd) {
            [array[pBegin],array[pEnd]] = [array[pEnd],array[pBegin]];
        }
    }
    return array;
};

/**
 * 判断输入是否为偶数
 * @param num
 * @returns {boolean}
 */
const isEven = num => (num & 1) === 0;
print(reOrderArray([1]))