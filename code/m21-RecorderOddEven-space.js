/**
 * 以空间换时间，oddBegin为奇数下标，oddCount为偶数下标
 * 能保证奇数与奇数之间，偶数与偶数之间原来的相对位置
 * @param array
 * @returns {[]}
 * @constructor
 */
function reOrderArray(array) {
    let oddBegin = 0,
        oddCount = 0;
    const newArray = [];
    for (let i=0; i<array.length; i++) {
        if ( array[i] & 0x1 ) {
            oddCount++;// 统计奇数个数，即偶数开始的下标
        }
    }
    for (let i=0; i<array.length; i++) {
        if ( array[i] & 0x1) {
            newArray[oddBegin++] = array[i];
        } else {
            newArray[oddCount++] = array[i];
        }
    }
    return newArray;
}
print(reOrderArray([1,2,3,4,5,6,7]))