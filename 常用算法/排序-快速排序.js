function quickSort(arr) {
    if (arr.length < 1) {
        return null;
    }
    return quick(arr,0,arr.length-1);
}
// 比较函数，判断是否需要交换
function compare(a,b) {
    if (a === b) {
        return 0;
    }
    return a>b? 1 : -1;
}
// 交换函数
function swap(arr,a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
}
// 一趟交换，分治函数 , 返回主元index
function partition(arr,left,right) {
    // 选取中间的一个数字作为主元
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i < j) {
        while (compare(arr[i],pivot) === -1) { // i < 主元，下一步
            i++;
        }
        while (compare(arr[j],pivot) === 1) { // j > 主元，下一步
            j--;
        }
        if (i <= j) {
            swap(arr,i,j);
            i++;
            j--;
        }
    }
    return i;
}
// 递归函数,返回排序后的数组
function quick(arr,left,right) {
    let index; // 主元index
    if (arr.length > 1) {
        index = partition(arr,left,right);
        if(left < index-1) {
            quick(arr,left,index-1);
        }
        if(right > index) {
            quick(arr,index,right);
        }
    }
    return arr;
}
let Array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(Array));
