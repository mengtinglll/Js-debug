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
