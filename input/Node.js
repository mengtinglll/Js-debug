class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
let list1 = new Node(1, new Node(3, new Node(5, new Node(7, null))));
let list2 = new Node(2, new Node(4, new Node(6, new Node(8, null))));
module.exports.list1 = list1;
module.exports.list2 = list2;

// 含有公共节点的俩个链表
// listA:1,2,3,4
// listB:5,6,3,4
const node4th = new Node(4);
const node3th = new Node(3, node4th);
const listA = new Node(1, new Node(2, new Node(3, node3th)));
const listB = new Node(5, new Node(6, node3th));
module.exports.listA = listA;
module.exports.listB = listB;

// 含有random的复杂链表
class RandomListNode{
    constructor(x) {
        this.label = x;
        this.next = null;
        this.random = null;
    }
}
const node1 = new RandomListNode("a"),
    node2 = new RandomListNode("b"),
    node3 = new RandomListNode("c"),
    node4 = new RandomListNode("d");

node1.next = node2;
node2.next = node3;
node3.next = node4;

node1.random = node3;
node4.random = node2;
module.exports.complexList = node1;
