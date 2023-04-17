var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let a = new ListNode(0, null);
    let aTail = a;
    let b = new ListNode(0, null);
    let bTail = b;

    while (head) {
        if (head) {
            aTail.next = head;
            aTail = aTail.next;
            head = head.next;
            aTail.next = null;
        }

        if (head) {
            bTail.next = head;
            bTail = bTail.next;
            head = head.next;
            bTail.next = null;
        }
    }

    let result = new ListNode(0, null);
    let tail = result;

    a = a.next;
    b = b.next;

    while (a || b) {
        if (b) {
            tail.next = b;
            b = b.next;
            tail = tail.next;
        }

        if (a) {
            tail.next = a;
            a = a.next;
            tail = tail.next;
        }
    }

    return result.next;
};

// o(n) time
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0, head);
  let prevTail = dummy;
  let curr = head;
  let next, nextHead;

  while (curr && curr.next) {
      next = curr.next
      nextHead = next.next;
      prevTail.next = next;
      next.next = curr;
      curr.next = nextHead;
      prevTail = curr;
      curr = nextHead;
  }

  return dummy.next;
};