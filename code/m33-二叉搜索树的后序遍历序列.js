function VerifySquenceOfBST(sequence)
{
    let length = sequence.length,
        root = sequence[length-1];
    if (length === 0) return false;
    // 左子树所有值要小于根节点,故以大于根节点的值为分界
    let i = 0;
    for (; i<length-1; i++) {
        if(sequence[i] > root)
            break;
    }
    // 右子树所有的值要大于根节点
    let j = i;
    for (; j<length-1; j++) {
        if(sequence[j] < root)
            return false;
    }
    let left = true;
    if (i>0) {
        left = VerifySquenceOfBST(sequence.slice(0,i));
    }
    let right = true;
    if (j<length-1) {
        right = VerifySquenceOfBST(sequence.slice(j,length-1));
    }
    return left && right;
}
console.log(VerifySquenceOfBST([7,3,6,5]));
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};
