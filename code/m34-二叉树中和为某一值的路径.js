/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    let sum = 0,
        res = [];
    function _findPath(node,path) {
        if (root === null) {
            return null;
        }
        path.push(node.val);
        sum = sum + node.val;
        // 叶子节点，且满足目标值
        if (node.left === null && node.right === null && sum === expectNumber) {
            res.push([...path]);
        }
        // 递归左子树
        if (node.left) {
            _findPath(node.left,path);
        }
        // 递归右子树
        if (node.right) {
            _findPath(node.right,path);
        }
        // 遍历下一种路径
        path.pop();
        sum = sum - node.val;
    }
    _findPath(root,[]);
    return res;
}
let data = require('../input/BinaryTree');
// console.log(FindPath(data.test, 22));
console.log(FindPath({}, 0));
module.exports = {
    FindPath : FindPath
};
