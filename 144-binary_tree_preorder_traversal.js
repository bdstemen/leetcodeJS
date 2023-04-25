// helper function
var preorderTraversal = function(root) {
    let result = [];

    const dfs = function(node) {
        if (!node) return;

        result.push(node.val);
        bfs(node.left);
        bfs(node.right);
    }

    bfs(root);
    return result;
};

// pure recursive
var preorderTraversal = function(root, result = []) {
  if (!root) return result;

  result = result.concat(root.val, preorderTraversal(root.left), preorderTraversal(root.right));

  return result;
};