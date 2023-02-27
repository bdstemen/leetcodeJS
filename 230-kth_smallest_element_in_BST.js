// iterative solution using stack
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

// Recursive solution
var kthSmallest = function(root, k) {
    let count = 1;
    let result;

    let search = function(curr) {
        if (!curr) return;
        search(curr.left);
        if (count === k) result = curr.val;
        count++;
        search(curr.right);
    }

    search(root);
    return result;
};