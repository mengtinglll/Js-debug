function VerifySquenceOfBST(sequence) {
    let n = sequence.length;
    if (n === 0) return false;
    while (n--) {
        let i = 0;
        while (sequence[i]<sequence[n]) i++;
        while (sequence[i]>sequence[n]) i++;
        if (i<n) return false;
    }
    return true;
}
console.log(VerifySquenceOfBST([7,3,6,5]));
console.log(VerifySquenceOfBST([5,7,6,9,11,10,8]));
