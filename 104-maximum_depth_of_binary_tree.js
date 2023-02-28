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

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

// BFS
var maxDepth = function(root) {
  if (!root) return 0;

  let level = 0;
  let queue = [root]

  while (queue.length) {
      let len = queue.length;
      for (let i = len - 1; i >= 0; i--) {
          let node = queue.shift()
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      level++;
  }
  return level;
};

// Iterative DFS
var maxDepth = function(root) {
  let stack = [[root, 1]]
  let maxDepth = 0;

  while (stack.length) {
      let [node, depth] = stack.shift();

      if (node) {
          maxDepth = Math.max(maxDepth, depth);
          stack.push([node.left, depth + 1]);
          stack.push([node.right, depth + 1]);
      }
  }

  return maxDepth;
};