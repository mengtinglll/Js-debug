class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
/**
 *
 * @param {Node} head
 */
function deleteDuplication(pHead)
{
    if(pHead === null || pHead.next === null) {
        return pHead;
    }
    const Head = new Node(0);
    Head.next = pHead;
    let pre = Head;
    let cur = Head.next;
    while(cur !== null) {
        if(cur.next !== null && cur.value === cur.next.value) {
            //存在重复，寻找最大重复
            while(cur.next !== null && cur.value === cur.next.value) {
                cur = cur.next;
            }
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    return Head.next;
}

let node4 = new Node(3, null),
    node3 = new Node(2, node4),
    node2 = new Node(2, node3),
    node1 = new Node(1, node2),
    head = new Node(1,node1);

console.log(deleteDuplication(head));
