// O(n + m) time
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let end = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            end.next = list1;
            list1 = list1.next;
        } else {
            end.next = list2;
            list2 = list2.next;
        }
        end = end.next;
    }

    end.next = list1 ? list1 : list2;

    return dummy.next;
};
};