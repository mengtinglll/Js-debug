/**
 * 合并2个有序单链表成为1个新的有序单链表
 * @param {Node} p1
 * @param {Node} p2
 */
function merge(p1, p2) {
    if (!p1) {
        return p2;
    } else if (!p2) {
        return p1;
    }

    let head = new Node(),
        node = head;

    while (p1 && p2) {
        if (p1.value < p2.value) {
            node.next = p1;
            p1 = p1.next;
        } else {
            node.next = p2;
            p2 = p2.next;
        }

        node = node.next;
    }

    if (!p1) {
        node.next = p2;
    }

    if (!p2) {
        node.next = p1;
    }

    return head.next;
}

/**
 * 以下是测试代码
 */

let list1 = new Node(1, new Node(3, new Node(5, new Node(7, null))));
let list2 = new Node(2, new Node(4, new Node(6, new Node(8, null))));

let head = merge(list1, list2);
while (head) {
    console.log(head.value);
    head = head.next;
}