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

// optimized
var copyRandomList = function(head) {
    if (!head) return null;

    let curr = head;
    let nodeHash = new Map([[null, null]]);

    while (curr) {
        nodeHash.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;

    while (curr) {
        let copy = nodeHash.get(curr);
        copy.next = nodeHash.get(curr.next);
        copy.random = nodeHash.get(curr.random);
        curr = curr.next;
    }

    return nodeHash.get(head);
};