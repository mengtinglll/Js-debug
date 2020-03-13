function Permutation(str)
{
    let res = [];
    if (str.length === 0 || str.length > 9) {
        return res;
    }
    let arr = str.split('');
    res = permutation(arr,0,res);
    res = [...new Set(res)];
    res.sort();
    return res;
}
function permutation(arr,index,res) {
    // 出口
    if(index === arr.length) {
        let s = arr.join('');
        return res.push(s);
    }
    // 全排列
    for (let i=index; i<arr.length; i++) {
        [arr[index],arr[i]] = [arr[i],arr[index]];
        permutation(arr,index+1, res);
        [arr[index],arr[i]] = [arr[i],arr[index]];
    }
    return res;
}
console.log(Permutation('dddhgjhgf'));
