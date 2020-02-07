function printMatrix(matrix) {
    if (matrix === null) return null;
    const rows = matrix.length,
        cols = matrix[0].length;
    let start = 0,
        res = [];
    while (rows > start * 2 && cols > start * 2) {
        res = res.concat(printMatrixInCircle(matrix, rows, cols, start));
        start++;
    }
    return res;
}
function printMatrixInCircle(matrix, rows, cols, start) {
    const endX = cols - 1 - start,
        endY = rows - 1 - start,
        res = [];
    for (let i = start; i <= endX; i++) {
        res.push(matrix[start][i]);
    }
    for (let i = start + 1; i <= endY; i++) {
        res.push(matrix[i][endX]);
    }
    for (let i = endX - 1; i >= start && endY > start; i--) {
        res.push(matrix[endY][i]);
    }
    for (let i = endY - 1; i >= start + 1 && endX > start; i--) {
        res.push(matrix[i][start]);
    }
    return res;
}
let data = require('../input/Matrix')
// 测试
let res1 = printMatrix(data.matrix1);
let res2 = printMatrix(data.matrix2);
let res3 = printMatrix(data.matrix3);
console.log("结果:",res1,res2,res3);
