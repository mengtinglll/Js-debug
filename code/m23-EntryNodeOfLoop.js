function EntryNodeOfLoop(pHead) {
    let meetingNode = MeetingNode(pHead);
    if (meetingNode === null)
        return null;
    let nodesInLoop = 1;
    let pNode1 = meetingNode;
    while (pNode1.next !== meetingNode) {
        pNode1 = pNode1.next;
        nodesInLoop++;
    }
    pNode1 = pHead;
    for (let i = 0; i < nodesInLoop; i++) {
        pNode1 = pNode1.next;
    }
    let pNode2 = pHead;
    while (pNode1 !== pNode2){
        pNode1 = pNode1.next;
        pNode2 = pNode2.next;
    }
    return pNode1;
}

/**
 * @return {null}
 */
function MeetingNode(pHead) {
    if(pHead === null)
        return null;
    let pSlow = pHead.next;
    if(pSlow === null)
        return null;
    let pFast = pSlow.next;
    while (pSlow !== null && pFast !== null) {
        if(pFast === pSlow) {
            return pFast;
        }
        pSlow = pSlow.next;
        pFast = pFast.next;
        if(pFast !== null) {
            pFast = pFast.next;
        }
    }
    return null;
}