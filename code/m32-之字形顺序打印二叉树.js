/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    const stack1 = [],
        stack2 = [],
        res = [];
    if (pRoot === null) {
        return res;
    }
    stack1.push(pRoot);
    let flag = true;
    while (stack1.length || stack2.length) {
        let list = [];
        if (flag) {
            while (stack1.length) {
                pRoot = stack1.pop();
                if (pRoot.left) { stack2.push(pRoot.left);}
                if (pRoot.right) { stack2.push(pRoot.right);}
                list.push(pRoot.val);
            }
        } else {
            while (stack2.length)  {
                pRoot = stack2.pop();
                if (pRoot.right) { stack1.push(pRoot.right);}
                if (pRoot.left) { stack1.push(pRoot.left);}
                list.push(pRoot.val);
            }
        }
        flag = !flag;
        res.push(list);
        list = [];
    }
    return res;
}
let data = require('../input/BinaryTree');
console.log(Print(data.leftTree));
module.exports = {
    Print : Print
};
