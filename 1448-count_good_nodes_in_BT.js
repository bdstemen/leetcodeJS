var goodNodes = function(root) {
    let goodNodes = 0;

    let traverse = function(node, maxVal) {
        if (!node) return;
        else if (node.val >= maxVal) goodNodes++;
        traverse(node.left, Math.max(node.val, maxVal));
        traverse(node.right, Math.max(node.val, maxVal));
    }

    traverse(root, root.val);
    return goodNodes;
};

// pure recursive solution
var goodNodes = function(root, maxVal = root.val) {
  let good = 0;

  if (!root) return good;

  else if (root.val >= maxVal) good++;
  good = good + goodNodes(root.left, Math.max(root.val, maxVal)) + goodNodes(root.right, Math.max(root.val, maxVal));

  return good;
};