var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;

  let nodes = [];
  let curr = head;

  while (curr) {
      nodes.push(curr);
      curr = curr.next;
  }

  let index = nodes.length - n;
  if (index === 0) return nodes[1];
  nodes[index - 1].next = nodes[index].next;
  return head;
};


// OPTIMIZED 2 pointer solution
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head);
  let l = dummy;
  let r = head;

  while (n > 0 && r) {
      r = r.next;
      n--;
  }

  while (r) {
      l = l.next;
      r = r.next;
  }

  l.next = l.next.next;

  return dummy.next;
};

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head);
  let pre = dummy;
  let tail = head;

  for (let i = 0; i < n; i++) {
      tail = tail.next
  }

  while (tail) {
      tail = tail.next;
      pre = pre.next;
  }

  pre.next = pre.next.next;
  return dummy.next;
};