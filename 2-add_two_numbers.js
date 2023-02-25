var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let val1, val2;
    let result = new ListNode();
    let end = result;

    while (l1 || l2) {
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        } else {
            val1 = 0;
        }

        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        } else {
            val2 = 0;
        }

        sum = (val1 + val2);

        if (end.val > 9) {
            sum += Math.trunc(end.val / 10);
            end.val = end.val % 10;
        }

        end.next = new ListNode(sum, null);
        end = end.next;
    }

    if (end.val > 9) {
        end.next = new ListNode(Math.trunc(end.val / 10));
        end.val = end.val % 10;
    }

    return result.next;
};

// cleaner solution
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let val1, val2;
    let result = new ListNode();
    let end = result;

    while (l1 || l2 || carry) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        sum = (val1 + val2 + carry);
        carry = Math.trunc(sum / 10);
        sum = sum % 10;

        end.next = new ListNode(sum, null);

        end = end.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;
};