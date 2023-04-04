var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    let vals = new Set();
    let curr = head;
    let pre = new ListNode(0, head);

    while (curr) {
        if (vals.has(curr.val)) {
            pre.next = curr.next;
        } else {
            vals.add(curr.val);
            pre = curr;
        }
        curr = curr.next;
    }

    return head;
};