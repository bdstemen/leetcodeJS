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