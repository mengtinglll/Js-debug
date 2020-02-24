/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
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

console.log("正常测试",TreeDepth(data.root));
console.log("空树",TreeDepth(null));
console.log("单节点",TreeDepth(data.singleRoot));
console.log("左树",TreeDepth(data.leftTree));
module.exports = {
    TreeDepth : TreeDepth
};
