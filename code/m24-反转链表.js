function ReverseList(pHead)
{
    let node = pHead;
    let pre = null;
    while (node) {
        let next = node.next;
        node.next = pre;
        pre = node;
        node = next;
    }
    return pre;
}