// O(n) time complexity - have to visit every node since BT, not BST
// O(h) memory avg, O(n) worst case, O(logn) if balanced
var hasPathSum = function(root, targetSum) {

  const dfs = function(node, currSum) {
      if (!node) return false;

      currSum += node.val;

      if (!node.left && !node.right) {
          return currSum === targetSum;
      }

      return (dfs(node.left, currSum) || dfs(node.right, currSum))
  }

  return dfs(root, 0);
};