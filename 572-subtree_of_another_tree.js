var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let isSameTree = function(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val !== subRoot.val) return false;

    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
}