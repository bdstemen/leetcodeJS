var rotateRight = function(head, k) {
    if (!head) return head;

    let tail = head;
    let length = 1;

    while (tail.next) {
        length++;
        tail = tail.next;
    }

    tail.next = head;
    k = k % length;

    for (let i = 0; i < length - k; i++) {
        head = head.next;
        tail = tail.next;
    }

    tail.next = null;

    return head;
};

// optimized solution
var rotateRight = function(head, k) {
    if (!head) return head;

    let tail = head;
    let length = 1;

    while (tail.next) {
        length++;
        tail = tail.next;
    }

    k = k % length;
    if (k === 0) return head;

    let curr = head;
    for (let i = 0; i < length - k - 1; i++) {
        curr = curr.next
    }

    let newHead = curr.next;
    curr.next = null;
    tail.next = head;
    return newHead;
};