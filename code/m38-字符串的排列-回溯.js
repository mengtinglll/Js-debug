function Permutation(str)
{
    let res = [];
    if(str.length === 0 || str.length > 9) {
        return res;
    }
    let arr = str.split('');
    let pStr = '';
    res = permutation(arr,pStr,res);
    // 生成时已避免重复，排序即可；
    res.sort();
    return res;
}
function permutation(arr,pStr,res) {
    // 出口，arr子弹用完
    if (arr.length === 0) {
        return res.push(pStr);
    }
    // 回溯法
    const isRepeated = new Set();
    for (let i=0; i<arr.length; i++) {
        if(!isRepeated.has(arr[i])) {
            // 用过该字母后，就将其从弹夹中删除
            let char = arr.splice(i,1)[0];
            pStr += char;
            // 进入下一位,减少一位的弹夹arr，增加一位的单词pStr
            permutation(arr,pStr,res);
            // 回溯到上一状态，arr和pStr
            arr.splice(i,0,char);
            pStr = pStr.slice(0,pStr.length-1);
            isRepeated.add(char);
        }
    }
    return res;
}
console.log(Permutation(''));
