var deleteDuplicates = function(head) {
    if (!head) return head;

    let dummy = new ListNode(0, head);
    let pre = dummy;
    let curr = head;

    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }
            pre.next = curr.next;
        } else {
            pre = pre.next;
        }
        curr = curr.next;
    }

    return dummy.next;
};