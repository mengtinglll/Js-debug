/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    if (pRoot === null) return true;
    let stack = [];
    stack.push(pRoot.left);
    stack.push(pRoot.right);
    while (stack.length) {
        let right = stack.pop();
        let left = stack.pop();
        if (left === null && right === null) continue;
        if (left === null || right === null) return false;
        if (left.val !== right.val) return false;
        stack.push(left.left);
        stack.push(right.right);
        stack.push(left.right);
        stack.push(right.left);
    }
    return true;
}

let data = require('../input/BinaryTree');
// 易错测试用例
let res1 = isSymmetrical(data.nonSymmetricalTree);
// 鲁棒性测试用例
let res1_1 = isSymmetrical(data.nullRoot);
let res1_2 = isSymmetrical(data.singleRoot);
// 对称二叉树测试用例
let res2 = isSymmetrical(data.symmetricalTree);
console.log('结果：',res1,res1_1,res1_2,res2);

module.exports = {
    isSymmetrical : isSymmetrical
};