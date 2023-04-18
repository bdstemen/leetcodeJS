// brute force solution O(n^2) time, O(1) memory
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let list1cursor = headA;
  let list2cursor = headB;

  while (list1cursor) {
    while(list2cursor) {
      if (list1cursor === list2cursor) return list1cursor;
      list2cursor = list2cursor.next;
    }
    list1cursor = list1cursor.next
    list2cursor = headB;
  }

  return null;
};

// optimized solution O(n + m) time, O(1) memory
var getIntersectionNode = function(headA, headB) {
  let lengthA = getListLength(headA);
  let lengthB = getListLength(headB);

  while(lengthA > lengthB) {
    headA = headA.next;
    lengthA--;
  }

  while (lengthB > lengthA) {
    headB = headB.next;
    lengthB--;
  }

  while (headA && headB) {
    if (headA === headB) return headA;

    headA = headA.next;
    headB = headB.next;
  }

  return null;
};

var getListLength = function(head) {
  let curr = head;
  let counter = 0;

  while (curr) {
    counter++;
    curr = curr.next;
  }

  return counter
}