function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(pRoot)
{
    // 先序遍历
    if (pRoot === null) {
        arr.push('a');
    } else {
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
    return arr;
}
function Deserialize(input)
{
    if (input.length === 0) {
        return null;
    }
    let node = null;
    const number = input.shift();
    if (typeof number === "number") {
        node = new TreeNode(number);
        node.left = Deserialize(input);
        node.right = Deserialize(input);
    }
    return node;
}
let data = require('../input/BinaryTree');
console.log("正常测试",Serialize(data.root));
let input = Serialize(data.root);
console.log("反序列化", Deserialize(input));
module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};
