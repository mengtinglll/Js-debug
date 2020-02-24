/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    if (pRoot === null) {
        return true;
    }
    let Left = TreeDepth(pRoot.left);
    let Right = TreeDepth(pRoot.right);
    if (Left-Right > 1 || Right-Left >1) {
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
function TreeDepth(pRoot)
{
    if (pRoot === null) {
        return 0;
    }
    let Left = TreeDepth(pRoot.left);
    let Right = TreeDepth(pRoot.right);
    return (Left>Right)? (Left+1) : (Right+1);
}

let data = require('../input/BinaryTree');

console.log("正常测试",IsBalanced_Solution(data.root));
console.log("空树",IsBalanced_Solution(null));
console.log("单节点",IsBalanced_Solution(data.singleRoot));
console.log("左树",IsBalanced_Solution(data.leftTree));
module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};
