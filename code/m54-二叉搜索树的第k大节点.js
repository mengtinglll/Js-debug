/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    if (pRoot === null || k === 0) {
        return null;
    }
    function KthNodeCore(pRoot) {
        let target = null;
        if (pRoot.left !== null) {
            target = KthNodeCore(pRoot.left);
        }
        if (target === null) {
            if (k === 1) {
                target = pRoot;
            }
            k--;
        }
        if (target === null && pRoot.right !== null) {
            target = KthNodeCore(pRoot.right);
        }
        return target;
    }
    return KthNodeCore(pRoot);
}
let data = require('../input/BinaryTree');
console.log("正常测试",KthNode(data.searchTree,2));
module.exports = {
    KthNode : KthNode
};
