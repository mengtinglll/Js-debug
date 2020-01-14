/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root === null) return;
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let parent = stack.pop();
        console.log(parent);
        [parent.left, parent.right] = [parent.right,parent.left];
        if (parent.left){
            stack.push(parent.left);
        }
        if (parent.right) {
            stack.push(parent.right);
        }
    }

}
let data = require('../input/BinaryTree');
let print = require('../utils/从上到下打印二叉树');
Mirror(data.leftTree);
console.log('结果：',data.leftTree);
print.PrintFromTopToBottom(data.leftTree);
module.exports = {
    Mirror : Mirror
};