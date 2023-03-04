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

// cleaner solution, both are O(n) time and O(1) mem
var removeElements = function(head, val) {
    let curr = new ListNode(0, head);
    head = curr;

    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head.next;
};