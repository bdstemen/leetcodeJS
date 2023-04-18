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