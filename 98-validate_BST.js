var isValidBST = function(root) {
    let vals = [];

    let traverseInOrder = function(node) {
        if (!node.left && !node.right) {
            vals.push(node.val);
            return;
        }

        if (node.left) traverseInOrder(node.left);
        vals.push(node.val);
        if (node.right) traverseInOrder(node.right);
    }

    traverseInOrder(root);

    for (let i = 0; i < vals.length - 1; i++) {
        if (vals[i] >= vals[i + 1]) return false;
    }
    return true;
};

// simple recursive solution
var isValidBST = function(root) {
    let validate = function(node, leftBound, rightBound) {
        if (!node) {
            return true;
        } else if (!(node.val > leftBound) || !(node.val < rightBound)) {
            return false;
        }
        return validate(node.left, leftBound, node.val) && validate(node.right, node.val, rightBound);
    }

    return validate(root, -Infinity, Infinity);
};