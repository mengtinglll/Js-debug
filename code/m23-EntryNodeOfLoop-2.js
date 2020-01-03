function EntryNodeOfLoop (pHead) {
    let pSlow = pHead;
    let pFast = pHead;
    while (pFast.next !== null && pFast.next.next !== null) {
        pSlow = pSlow.next;
        pFast = pFast.next.next;
        if (pSlow === pFast) { // 相遇点
            pSlow = pHead;
            while (pSlow !== pFast) {
                pSlow = pSlow.next;
                pFast = pFast.next;
            }
            return pSlow;
        }
    }
    return null;
}