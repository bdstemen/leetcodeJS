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