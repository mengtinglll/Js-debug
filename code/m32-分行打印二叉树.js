/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    const queue = [],
        res = [];
    if (pRoot === null) {
        return res;
    }
    queue.push(pRoot);
    let toBePrinted = 1,
        nextLevel = 0,
        list = [];

    while (queue.length) {
        pRoot = queue.shift();
        if (pRoot.left) {
            queue.push(pRoot.left);
            nextLevel++;
        }
        if (pRoot.right) {
            queue.push(pRoot.right);
            nextLevel++;
        }
        list.push(pRoot.val);
        toBePrinted--;
        if (toBePrinted === 0) {
            res.push(list);
            list = [];
            toBePrinted = nextLevel;
            nextLevel = 0;
        }
    }
    return res;
}
let data = require('../input/BinaryTree');
console.log(Print(data.singleRoot));
module.exports = {
    Print : Print
};
