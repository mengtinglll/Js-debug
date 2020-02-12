/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    const list = [],
        res = [];
    if(root === null) return res;
    list.push(root);
    while (list.length) {
        root = list.shift();
        if (root.left) {
            list.push(root.left);
        }
        if (root.right) {
            list.push(root.right);
        }
        res.push(root.val);
    }
    return res;
}
let data = require('../input/BinaryTree');
console.log(PrintFromTopToBottom({}));
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};
