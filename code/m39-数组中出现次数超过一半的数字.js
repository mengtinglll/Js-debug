function MoreThanHalfNum_Solution(numbers)
{
    if(numbers.length === 0) {
        return 0;
    }
    let res = numbers[0];
    let count = 1;
    for (let i=1; i<numbers.length; i++) {
        if (count === 0) {
            res = numbers[i];
        }
        if(res === numbers[i]) {
            count++;
        } else {
            count--;
        }
    }
    if(!Check(numbers,res)) {
        return 0;
    }
    return res;
}
function Check (numbers,res) {
    let count = 0;
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] === res) {
            count++;
        }
    }
    if (count*2 > numbers.length) {
        return true;
    }
    return false;
}
console.log(MoreThanHalfNum_Solution([2,2,2,2,2,1,3,4,5]));
