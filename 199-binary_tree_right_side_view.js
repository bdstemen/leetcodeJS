var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let len = queue.length;
        result.push(queue[len - 1].val);

        for (let i = len - 1; i > -1; i--) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue. push(curr.right);
        }
    }

    return result;
};