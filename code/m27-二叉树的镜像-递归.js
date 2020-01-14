/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root === null) return;
    if(root.left === null && root.right === null) return;
    [root.left, root.right] = [root.right,root.left];
    if (root.left) {
        Mirror(root.left);
    }
    if (root.right) {
        Mirror(root.right);
    }
}
let data = require('../input/BinaryTree');
let print = require('../utils/从上到下打印二叉树');
Mirror(data.root);
print.PrintFromTopToBottom(data.root);
module.exports = {
    Mirror : Mirror
};