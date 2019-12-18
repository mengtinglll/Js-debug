class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
/**
 *
 * @param {Node} head
 * @param {Node} toDelete
 */
function deleteNode(head, toDelete) {
    if (head === toDelete || !head || !toDelete) {
        return null;
    }
    let nextNode = toDelete.next;
    if(nextNode) {
        //不是尾节点
        toDelete.value = nextNode.value;
        toDelete.next = nextNode.next;
        nextNode = null;
    } else {
        //toDelete是尾节点
        let node = head;
        while (node.next !== toDelete) {
            node = node.next;
        }
        node.next = null;
        toDelete = null;
    }
}

// 测试用例
let node3 = new Node(3, null),
    node2 = new Node(2, node3),
    node1 = new Node(1, node2),
    head = new Node(null,node1);
deleteNode(head, node3);
let node = head.next;
while (node) {
    console.log(node.value);
    node = node.next;
}
