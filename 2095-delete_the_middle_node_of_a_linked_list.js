var deleteMiddle = function(head) {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next

    return dummy.next
};