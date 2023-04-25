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

// pure recursive
var postorderTraversal = function(root, result = []) {
  if (!root) return result;

  result = result.concat(postorderTraversal(root.left), postorderTraversal(root.right), root.val);

  return result;
};