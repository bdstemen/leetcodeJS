// Recursive DFS
var maxDepth = function(root) {
  let maxDepth = 0;

  function dfs(node, depth) {
      if (!node) return;
      maxDepth = Math.max(maxDepth, depth)
      if (node.left) dfs(node.left, depth + 1)
      if (node.right) dfs(node.right, depth + 1)
  }

  dfs(root, 1);
  return maxDepth;
};

// Pure Recursive DFS
var maxDepth = function(root) {
  if (!root) return 0;
  return (1 + Math.max(maxDepth(root.left), maxDepth(root.right)));
};