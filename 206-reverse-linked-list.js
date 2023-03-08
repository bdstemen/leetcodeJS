// O(n) time O(1) space
var reverseList = function(head) {
  // dont actually need this line, but explicitly handling edge cases can be good, no?
  // if (!head) return head

  let pre = next = null;

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