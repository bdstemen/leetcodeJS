var pathSum = function(root, targetSum) {
    let result = [];

    const dfs = function(node, currSum, currSeq) {
        if (!node) return;

        currSum += node.val;
        currSeq.push(node.val);

        if (!node.left && !node.right) {
            if (currSum === targetSum) result.push(currSeq);
            return;
        }

        dfs(node.left, currSum, currSeq.slice());
        dfs(node.right, currSum, currSeq.slice());
    }

    dfs(root, 0,[]);
    return result;
};