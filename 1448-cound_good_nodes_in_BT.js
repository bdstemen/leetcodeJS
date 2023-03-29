var goodNodes = function(root) {
    let goodNodes = 0;

    let traverse = function(node, maxVal) {
        if (!node) return;
        else if (node.val >= maxVal) goodNodes++;
        traverse(node.left, Math.max(node.val, maxVal));
        traverse(node.right, Math.max(node.val, maxVal));
    }

    traverse(root, root.val);
    return goodNodes;
};