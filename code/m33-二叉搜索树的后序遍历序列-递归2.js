function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    return judge(sequence, 0, sequence.length - 1);
}
function judge(a, l, r) {
    if (l>=r) {
        return true;
    }
    let i=r-1;
    // 右子树大于根节点，区分左右子树
    while (a[i] > a[r] && i>0) i--;
    // 左子树的值要小于根节点
    for(let j=i-1;j>=l;j--) {
        if(a[j] > a[r]) {
            return false;
        }
    }
    return judge(a,l,i-1) && judge(a,i,r-1);
}
console.log(VerifySquenceOfBST([7,3,6,5]));
console.log(VerifySquenceOfBST([5,7,6,9,11,10,8]));
