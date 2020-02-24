/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(root, obj = {}) {
    if (!root) {
        obj.depth = 0;
        return true;
    }

    const left = {},
        right = {};
    if (IsBalanced_Solution(root.left, left) && IsBalanced_Solution(root.right, right)) {
        const diff = Math.abs(left.depth - right.depth);
        if (diff > 1) {
            return false;
        }

        obj.depth = 1 + (left.depth > right.depth ? left.depth : right.depth);
        return true;
    } else {
        return false;
    }
}
let data = require('../input/BinaryTree');

console.log("正常测试",IsBalanced_Solution(data.root));
console.log("空树",IsBalanced_Solution(null));
console.log("单节点",IsBalanced_Solution(data.singleRoot));
console.log("左树",IsBalanced_Solution(data.leftTree));
