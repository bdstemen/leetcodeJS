var isValidBST = function(root) {
    let vals = [];

    let traverseInOrder = function(node) {
        if (!node.left && !node.right) {
            return [true, node.val];
        }

        if (!node.left) {
            let right = traverseInOrder(node.right);
            return [(right[1] > node.val), node.val];
        } else if (!node.right) {
            let left = traverseInOrder(node.left);
            return  [(left[1] < node.val), node.val];
        } else {
            let right = traverseInOrder(node.right);
            let left = traverseInOrder(node.left);
            return  [((left[1] < node.val) && (right[1] > node.val)), node.val];
        }
    }

    let result = traverseInOrder(root);
    return result[0];
};