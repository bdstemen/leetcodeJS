// O(n) time O(1) space
var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(0, head);
    let leftChunk = dummy;
    let next = pre = null;

    for(let i = 0; i < left - 1; i++) {
        head = head.next;
        leftChunk = leftChunk.next;
    }

    for(let i = 0; i <= right - left; i++) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    leftChunk.next.next = head;
    leftChunk.next = pre;
    return dummy.next;
};