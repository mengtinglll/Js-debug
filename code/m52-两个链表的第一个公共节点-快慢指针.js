/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // 得到两链表的长度
    let length1 = 0;
    let length2 = 0;
    let node = pHead1;
    while (node) {
        length1++;
        node = node.next;
    }
    node = pHead2;
    while (node) {
        length2++;
        node = node.next;
    }
    let diff = Math.abs(length1 - length2);
    let longList = null;
    let shortList = null;
    if (length1 > length2) {
        longList = pHead1;
        shortList = pHead2;
    } else {
        longList = pHead2;
        shortList = pHead1;
    }
    while (diff) {
        diff--;
        longList = longList.next;
    }
    while (longList && shortList) {
        if (longList === shortList) {
            return longList;
        }
        longList = longList.next;
        shortList = shortList.next;
    }
    return null;
}
let data = require('../input/Node');
// 普通测试，有公共节点
console.log(FindFirstCommonNode(data.listA,data.listB));
// 无公共节点测试
console.log(FindFirstCommonNode(data.list1,data.list2));
