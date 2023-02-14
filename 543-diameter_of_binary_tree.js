/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let result = 0;

  var dfs = function(node) {
      if (!node) return -1;
      let left = dfs(node.left);
      let right = dfs(node.right);
      result = Math.max(result, (left + right + 2))
      return 1 + Math.max(left, right);
  }

  dfs(root);
  return result
};