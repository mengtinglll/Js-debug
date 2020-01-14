/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    if(pRoot === null) return true;
    return compareRoot(pRoot.left,pRoot.right);
}
function compareRoot(root1,root2) {
    if (root1 === null){
        return root2 === null;
    }
    if (root2 === null) {
        return false;
    }
    if(root1.val !== root2.val) {
        return false;
    }
    return compareRoot(root1.left,root2.right) && compareRoot(root1.right,root2.left);
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