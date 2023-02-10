/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let nodes = [];
  while (head) {
      nodes.push(head);
      head = head.next;
      nodes[nodes.length - 1].next = null;
  }

  head = nodes.shift();
  let curr = head;
  let count = 0;
  while (nodes.length) {
      if (count % 2 === 0) curr.next = nodes.pop();
      else curr.next = nodes.shift();
      curr = curr.next;
      count++;
  }

  return head;
};


// OPTIMIZED SOLUTION


var reorderList = function(head) {
  if (!head) return;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let curr = slow;
  let pre = null;
  let next = null;

  while (curr) {
      next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
  }

  curr = head;
  next = curr.next;
  let tail = pre;

  while (next) {
      curr.next = tail;
      curr = tail;
      tail = next;
      next = curr.next;
  }
};