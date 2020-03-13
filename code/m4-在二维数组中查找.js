function Find(target, array)
{
    // write code here
    let res = false;
    if(array.length !== 0){
        const n=array.length;//n行
        const m=array[0].length;//m列
        let row=0;
        let col=m-1;//从右上角（0行，m-1列）开始
        while(row<n&&col>=0){
            if(target>array[row][col]){
                row++;
            }else if(target<array[row][col]){
                col--;
            }else {
                return true;
            }
        }
    }
    return res;
}
let data = require('../input/Matrix');
console.log(Find(0,[[]]));
