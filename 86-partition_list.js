var partition = function(head, x) {
  if (!head || !head.next) return head;

  let cursor = head;
  let less = null;
  let greater = null;
  let lessEnd = null;
  let greaterEnd = null;

  while (cursor) {
      let currentNode = new ListNode(cursor.val);

      if (currentNode.val < x) {
          if (!less) {
              less = currentNode;
          } else {
              lessEnd.next = currentNode;
          }
          lessEnd = currentNode;
      } else {
          if (!greater) {
              greater = currentNode;
          } else {
              greaterEnd.next = currentNode;
          }
          greaterEnd = currentNode;
      }
      cursor = cursor.next;
  }

  if (less) {
      lessEnd.next = greater;
      return less;
  } else {
      return greater
  }
};