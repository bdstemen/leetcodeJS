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

 // initialize empty nodes array
// initialize revList, poppedNode, revListEnd to null

// while head is not null
  // push head to nodes array
  // head gets head.next
  // assign .next of the last node in the array to null

// while nodes array length
  // pop node
  // if revList is null
      // revList gets poppedNode
  // otherwise
    // revlistEnd.next gets poppedNode
  // revListEnd gets poppedNode

// return revList

var reverseList = function(head) {
    if (!head) return head;

    let nodes = [];
    let revList, poppedNode, revListEnd = null;

    while (head) {
        nodes.push(head);
        head = head.next;
        nodes[nodes.length - 1].next = null;
    }

    while (nodes.length) {
        poppedNode = nodes.pop();
        if (revList) {
            revListEnd.next = poppedNode;
        } else {
            revList = poppedNode;
        }
        revListEnd = poppedNode;
    }

    return revList;
};
