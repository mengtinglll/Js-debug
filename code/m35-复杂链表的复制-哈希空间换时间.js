function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    if (pHead === null) {
        return null;
    }
    const map = new Map();
    let p1 = pHead;
    let p2 = new RandomListNode(p1.label);
    const pHead2 = p2;
    map.set(p1,p2);
    // 开始复制节点并创建哈希
    while (p1) {
        if (p1.next) {
            p2.next = new RandomListNode(p1.next.label);
        } else {
            p2.next = null;
        }
        p1 = p1.next;
        p2 = p2.next;
        map.set(p1,p2);
    }
    // 重头开始复制random
    p1 = pHead;
    p2 = pHead2;
    while (p1) {
        if (p1.random) {
            p2.random = map.get(p1.random);
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return pHead2;
}
let data = require('../input/Node');
console.log("原链表：", data.complexList);
console.log("正常测试",Clone(data.complexList));
