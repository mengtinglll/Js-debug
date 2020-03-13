function compare(version1,version2) {
    if (!(version1 && version2)) return;
    let arr3 = version1.match('^');
    console.log(arr3);
    let arr1 = split_v(version1.split('.'));
    let arr2 = split_v(version2.split('.'));
    let minLength = Math.min(arr1.length,arr2.length);
    let res = 'same';
    for(let i=0;i<Math.min(minLength,3);i++) {
        let v1 =  isNaN(Number(arr1[i])) ? arr1[i].charCodeAt() : Number(arr1[i]);
        let v2 = isNaN(Number(arr2[i])) ? arr2[i].charCodeAt() : Number(arr2[i]);
        if (v1 > v2) {
            res = version1;
            break;
        } else if (v1 < v2) {
            res = version2;
            break;
        }
    }
    res = arr1.pop() > arr2.pop() ? version1 : version2;
    return res;
}

// 该函数对最后一位先行版本号进行处理
// 考虑alpha<beta<rc<r(release)
// 若无先行版本号，前三位相等的情况下，版本最新
function split_v (arr) {
    if(arr[arr.length-1].indexOf('-')<0) {
        // 先行版本号比较时，用ASCII比较，故补'z'，实现alpha<beta<rc<r(release)<z
        arr.push('z');
    } else {
        arr.push(...arr.pop().split('-'));
    }
    return arr;
}
console.log(compare('1.12.3','1.12.3-beta'));
