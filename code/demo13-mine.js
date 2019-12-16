function movingCount(threshold, rows, cols)
{
    if (threshold < 0 || rows <= 0 || cols <= 0) {
        return 0;
    }
    const visited = new Array(rows * cols);
    let count = movingCountCore(threshold, rows, cols, 0, 0, visited);
    console.log("总计",count);
    return count;
}
function movingCountCore(threshold, rows, cols, row, col, visited){
    let single = 0;
    if(check(threshold, rows, cols, row, col, visited)) {
        visited[row * cols + col] = true;
            //  相当于每次加1
        single = 1+ movingCountCore(threshold, rows, cols, row + 1, col, visited)
            + movingCountCore(threshold, rows, cols, row, col + 1, visited)
            + movingCountCore(threshold, rows, cols, row - 1, col, visited)
            + movingCountCore(threshold, rows, cols, row, col - 1, visited);
        // console.log("single",single);
    }
    console.log("single",single);
    return single;
}
function check(threshold, rows, cols, row, col, visited) {
    let getsum = getSum(row) + getSum(col);
    if (getsum <= threshold && !visited[row * cols + col] && row >= 0 && row < rows && col >= 0 && col < cols) {
        console.log("行列个位数之和 ",getsum);
        return true;
    }
    return false;
}
function getSum(num) {
    let sum = 0;
    while(num > 0) {
        sum = sum + num % 10;
        num = parseInt(num / 10);
    }
    console.log("个位数之和 ",sum)
    return sum;
}


print(movingCount(18, 10, 10));
