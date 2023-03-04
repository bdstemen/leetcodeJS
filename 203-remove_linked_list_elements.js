var removeElements = function(head, val) {
    if (!head) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            curr = curr.next
            prev.next = curr;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return dummy.next;
};