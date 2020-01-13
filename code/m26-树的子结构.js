/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/**
 * @return {boolean}
 */
function HasSubtree(pRoot1, pRoot2)
{
    let res = false;
    if(pRoot1 && pRoot2) {
        if(pRoot1.val === pRoot2.val)
            res = DoesTree1hasTree2(pRoot1, pRoot2);
        if( !res)
            res = HasSubtree(pRoot1.left, pRoot2);
        if (!res)
            res = HasSubtree(pRoot1.right, pRoot2)
    }
    return res;
}
/**
 * @return {boolean}
 */
function DoesTree1hasTree2(pRoot1, pRoot2) {
    if (pRoot2 === null)
        return true;
    if (pRoot1 === null)
        return false;
    if(pRoot1.val !== pRoot2.val){
        return false;
    }
    return DoesTree1hasTree2(pRoot1.left,pRoot2.left) && DoesTree1hasTree2(pRoot1.right,pRoot2.right);
}
let data = require('../input/BinaryTree');
console.log("数据:",HasSubtree(data.ATree,data.BTree));
module.exports = {
    HasSubtree : HasSubtree
};