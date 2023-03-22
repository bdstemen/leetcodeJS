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
    let degree = 1;
    let nodes = preorder.split(',');
    for (let node of nodes) {
        // account for In degree
        degree--;

        if (degree < 0) return false;

        // account for Out degrees
        if (node !== '#') degree += 2;
    }
    return degree === 0;
};