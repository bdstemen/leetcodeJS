var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(0, head);
    let leftChunk = dummy;
    let count = 0;
    let next = pre = null;

    while(count < left - 1) {
        head = head.next;
        leftChunk = leftChunk.next;
        count++;
    }

    while(count < right) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
        count++;
    }

    leftChunk.next.next = head;
    leftChunk.next = pre;
    return dummy.next;
};