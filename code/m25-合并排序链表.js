function Merge(pHead1, pHead2) {
    if(pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1;
    }
    let pHeadNew = null;
    if (pHead1.val < pHead2.val) {
        pHeadNew = pHead1;
        pHeadNew.next = Merge(pHead1.next, pHead2);
    } else {
        pHeadNew = pHead2;
        pHeadNew.next = Merge(pHead1, pHead2.next);
    }
    return pHeadNew;
}
let list =require('../input/Node');

console.log("我是list2",list.list2);
console.log("我是list1",list.list1);

let head = Merge(list.list1, list.list2);
while (head) {
    console.log(head.val);
    head = head.next;
}