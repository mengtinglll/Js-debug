/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // 建立两个栈，从尾部依次弹出比较
    const stack1 = [];
    const stack2 = [];
    let node = pHead1;
    while (node) {
        stack1.push(node);
        node = node.next;
    }
    node = pHead2;
    while (node) {
        stack2.push(node);
        node = node.next;
    }
    node = null;
    while (stack1.length && stack2.length) {
        let top1 = stack1.pop();
        let top2 = stack2.pop();
        if (top1 === top2) {
            node = top1;
        } else {
            break;
        }
    }
    return node;
}

let data = require('../input/Node');
// 普通测试，有公共节点
console.log(FindFirstCommonNode(data.listA,data.listB));
// 无公共节点测试
console.log(FindFirstCommonNode(data.list1,data.list2));
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};
