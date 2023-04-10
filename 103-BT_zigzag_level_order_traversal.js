var zigzagLevelOrder = function(root) {
    let result = [];
    let queue = [root];
    let row = 0;

    while (queue.length) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (!node) continue;
            level.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        if (!level.length) continue;
        else if (row % 2 === 0) result.push(level);
        else result.push(level.reverse());
        row++;
    }

    return result;
};