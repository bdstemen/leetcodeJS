var evalRPN = function(tokens) {
    let stack = [];
    let vals = [];

    for (let i = tokens.length - 1; i > -1; i--) {
        stack.push(tokens[i]);
    }

    while (stack.length > 0) {
        let curr = stack.pop();

        if (!isNaN(parseInt(curr))) {
            vals.push(parseInt(curr));
        } else {
            let val1 = vals.pop();
            let val2 = vals.pop();

            if (curr === '+') vals.push(val2 + val1);
            else if (curr === '-') vals.push(val2 - val1);
            else if (curr === '*') vals.push(val2 * val1);
            else vals.push(Math.trunc(val2 / val1));
        }
    }

    return vals[0]
};

// optimized
var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let curr = tokens[i];

        if (!isNaN(parseInt(curr))) {
            stack.push(parseInt(curr));
        } else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            if (curr === '+') stack.push(val2 + val1);
            else if (curr === '-') stack.push(val2 - val1);
            else if (curr === '*') stack.push(val2 * val1);
            else stack.push(Math.trunc(val2 / val1));
        }
    }

    return stack[0]
};