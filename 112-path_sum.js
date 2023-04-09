var hasPathSum = function(root, targetSum) {
    let hasPath = false;

    const dfs = function(node, currSum) {
        currSum += node.val;

        if (!node.left && !node.right) {
            if (currSum === targetSum) hasPath = true;
            return;
        }

        if (node.left) dfs(node.left, currSum);
        if (node.right) dfs(node.right, currSum);
    }

    if (root) dfs(root, 0);
    return hasPath;
};