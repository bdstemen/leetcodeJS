// helper function
var preorderTraversal = function(root) {
    let result = [];

    const bfs = function(node) {
        if (!node) return;

        result.push(node.val);
        bfs(node.left);
        bfs(node.right);
    }

    bfs(root);
    return result;
};