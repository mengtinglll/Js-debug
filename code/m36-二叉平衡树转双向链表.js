/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRoot)
{
    if (pRoot === null) {
        return null;
    }
    // 获取链表头
    let pLast = null;
    pLast = ConvertNode(pRoot, pLast);
    let pHead = pLast;
    while (pHead.left && pHead) {
        pHead = pHead.left;
    }
    return pHead;
}
function ConvertNode(pNode, pLast) {
    if(pNode === null) {
        return null;
    }
    // 递归左子树
    if(pNode.left) {
        pLast = ConvertNode(pNode.left, pLast);
    }
    pNode.left = pLast;
    // 初始化pLast为null，非节点，故不存在右子树
    if (pLast) {
        pLast.right = pNode;
    }
    // 根左转换完成，更新pLast为根节点
    pLast = pNode;
    // 递归右子树
    if(pNode.right) {
        pLast = ConvertNode(pNode.right,pLast);
    }
    return pLast;
}
let data = require('../input/BinaryTree');
console.log("正常测试",Convert(data.searchTree));
module.exports = {
    Convert : Convert
};
