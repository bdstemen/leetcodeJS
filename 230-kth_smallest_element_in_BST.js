var kthSmallest = function(root, k) {
    let n = 0;
    let stack = [];
    let curr = root;

    while (stack.length > 0 || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left
        }

        curr = stack.pop();
        n++;
        if (n === k) return curr.val;
        curr = curr.right;
    }
};