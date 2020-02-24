/*
二叉树的深度及其路径，失败
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    const list = [],
        res = [];
    return find(pRoot,0,0,[],[]);
}
function find(root,sum,max,list,res) {
    if (root === null) {
        return 0;
    }
    list.push(root.val);
    const s = sum + 1;
    if(root.left === null && root.right === null && s>max) {
        max = s;
        res.push([...list]);
    }
    max = s;
    find(root.left,s,max,list,res);
    find(root.right,s,max,list,res);
    list.pop();
    return res;
}
let data = require('../input/BinaryTree');
console.log("正常测试",TreeDepth(data.root));
console.log("空树",TreeDepth(null));
console.log("单节点",TreeDepth(data.singleRoot));
console.log("左树",TreeDepth(data.leftTree));
module.exports = {
    TreeDepth : TreeDepth
};
