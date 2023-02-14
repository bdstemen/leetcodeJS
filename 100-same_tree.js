/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let result = true;

  var dfs = function(nodeP, nodeQ) {
      if (!nodeP && !nodeQ) {
          return;
      } else if (!nodeP || !nodeQ) {
          result = false;
          return;
      }
      result = result && nodeP.val === nodeQ.val;
      dfs(nodeP.left, nodeQ.left);
      dfs(nodeP.right, nodeQ.right);
  }

  dfs(p, q);
  return result;
};