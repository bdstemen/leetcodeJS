var levelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let len = queue.length;

        for (let i = len - 1; i > -1; i--) {
            let curr = queue.shift();
            level.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        result.push(level);
    }

    return result;
};

// refactor
var levelOrder = function(root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let len = queue.length;

        for (let i = len - 1; i > -1; i--) {
            let curr = queue.shift();
            if (curr) {
                level.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
        if (level.length) result.push(level);
    }

    return result;
};