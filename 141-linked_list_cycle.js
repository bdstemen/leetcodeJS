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

// Optimized approach
// O(n) time
// O(1) space
var hasCycle = function(head) {
    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};