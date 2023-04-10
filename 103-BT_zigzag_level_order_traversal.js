var zigzagLevelOrder = function(root) {
    let result = [];
    let queue = root ? [root] : [];

    while (queue.length) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (result.length % 2 === 0) result.push(level);
        else result.push(level.reverse());
    }

    return result;
};