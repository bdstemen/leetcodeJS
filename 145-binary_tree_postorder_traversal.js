// recursive using helper function
var postorderTraversal = function(root) {
    let result = [];

    const dfs = function(node) {
        if (!node) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }

    dfs(root);
    return result;
};

