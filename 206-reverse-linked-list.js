/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */



 var reverseList = function(head) {
  let pre = null;
  let next = null;

  while (head) {
      next = head.next;
      head.next = pre;
      pre = head;
      head = next;
  }

  return pre;
};



// var reverseList = function(head) {
//     if (!head) return null;

//     let curr = head;
//     let tail = null;
//     let nodes = [];

//     while (head) {
//         head = head.next;
//         nodes.push(curr);
//         curr.next = null;
//         curr = head;
//     }

//     while (nodes.length) {
//         curr = nodes.pop();
//         if (head) {
//             tail.next = curr;
//         } else {
//             head = curr;
//         }
//         tail = curr;
//     }

//     return head;
// };