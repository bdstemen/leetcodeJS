var isValidSerialization = function(preorder) {
    let stack = [];
    preorder.split(',').forEach(val => {
        stack.push(val);
        while (stack.length > 2 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
            console.log(stack);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push('#');
        }
    })
    return stack.length === 1 && stack[0] === '#';
};

// optimized solution O(n) time O(n) space
var isValidSerialization = function(preorder) {
    let balance = 1;
    let nodes = preorder.split(',');
    for (let node of nodes) {
        if (balance <= 0) return false;
        else if (node === '#') balance--;
        else balance++;
    }
    return balance === 0;
};