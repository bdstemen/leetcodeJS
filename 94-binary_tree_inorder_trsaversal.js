// solution with helper function
var inorderTraversal = function(root) {
    let result = [];

    const dfs = function(node) {
        if (!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return result;
};

// pure recursive solution
var inorderTraversal = function(root, vals = []) {
  if (!root) return vals;

  vals = inorderTraversal(root.left, vals);
  vals.push(root.val);
  vals = inorderTraversal(root.right, vals);

  return vals;
};