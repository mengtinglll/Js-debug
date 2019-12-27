function ListNode(x) {
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    if ( !head || k <= 0) {
        return;
    }
    let pFast = head;
    for (let i = 0; i < k; i++) {
        if (pFast.next !== null) {
            pFast = pFast.next;
        } else {
            return;
        }
    }
    let pSlow = head;
    while (pFast.next !== null) {
        pFast = pFast.next;
        pSlow = pSlow.next;
    }
    return pSlow;
}

let Node1 = new ListNode(1);
let Node2 = new ListNode(2);
let Node3 = new ListNode(3);
let Node4 = new ListNode(4);
Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node4;

print(FindKthToTail(Node1,2))