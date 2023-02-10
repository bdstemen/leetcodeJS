// Initial approach
// O(n) time & space
var hasCycle = function(head) {
  let nodes = new Set();
  while (head) {
      if (nodes.has(head)) return true;
      nodes.add(head);
      head = head.next;
  }
  return false;
};

