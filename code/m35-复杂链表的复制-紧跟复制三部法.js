function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    CloneNodes(pHead);
    ConnectRandomNodes(pHead);
    return ReconnectNodes(pHead);
}
function CloneNodes(pHead) {
    // 复制链表的所有节点，每个结点紧跟其后
    let pNode = pHead;
    while (pNode !== null) {
        let newNode = new RandomListNode(pNode.label);
        newNode.next = pNode.next;
        pNode.next = newNode;
        // 进行下一个节点的复制
        pNode = newNode.next;
    }
}
function ConnectRandomNodes(pHead) {
    // 复制random值，原random节点的next
    let pNode = pHead;
    while (pNode !== null) {
        if (pNode.random) {
            pNode.next.random = pNode.random.next;
        }
        pNode = pNode.next.next;
    }
}
function ReconnectNodes(pHead) {
    // 取出复制好的链表，即连接偶数位的节点
    let pNode = pHead;
    let newListHead = null;
    let newNode = null;
    // 首位鲁棒
    if (pNode !== null) {
        newListHead = newNode = pNode.next;
        // 取出原链表
        pNode.next = newNode.next;
        // 进行下一个节点
        pNode = newNode.next;
    }
    while (pNode !== null) {
        newNode.next = pNode.next;
        newNode = newNode.next;
        pNode.next = newNode.next;
        pNode = newNode.next;
    }
    return newListHead;
}
let data = require('../input/Node');
console.log("原链表：", data.complexList);
console.log("正常测试",Clone(data.complexList));
module.exports = {
    Clone : Clone
};
