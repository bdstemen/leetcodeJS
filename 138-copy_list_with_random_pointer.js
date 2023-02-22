var copyRandomList = function(head) {
    if (!head) return null;

    let copyHead = new Node(head.val, null, null);
    let curr = head;
    let copyCurr = copyHead;
    let random = copyRandom = null;

    while (curr.next) {
        copyCurr.next = new Node(curr.next.val, null, null);
        curr = curr.next;
        copyCurr = copyCurr.next;
    }

    curr = head;
    copyCurr = copyHead;

    while (curr) {
        if (!curr.random) {
            copyCurr.random = null;
        } else {
            random = head;
            copyRandom = copyHead;
            while (random) {
                if (curr.random === random) {
                    copyCurr.random = copyRandom;
                    break;
                }
                random = random.next;
                copyRandom = copyRandom.next;
            }
        }
        curr = curr.next;
        copyCurr = copyCurr.next;
    }

    return copyHead;
};