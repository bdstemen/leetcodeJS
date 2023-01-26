/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  let revList = revListEnd = poppedNode = null;
  let chunk = head;
  let counter = 0;
  let nodeArray = [];

  while (head) {
      counter = 0;

      while (head && counter < k) {
          counter++;
          head = head.next;
      }

      if (counter === k) {
          while (nodeArray.length < k) {
              nodeArray.push(chunk);
              chunk = chunk.next;
              nodeArray[nodeArray.length - 1].next = null;
          }

          while (nodeArray.length) {
              poppedNode = nodeArray.pop();

              if (!revList) revList = poppedNode;
              else revListEnd.next = poppedNode;

              revListEnd = poppedNode;
          }
      } else {
          if (!revList) revlist = chunk;
          else revListEnd.next = chunk;
      }
  }

  return revList
};