var generateParenthesis = function(n) {
    let result = [];

    let solver = function(open, close, curr = '') {
        if (open === n && close === n) result.push(curr);

        if (open < n) solver(open + 1, close, curr + '(');

        if (open > close) solver(open, close + 1, curr + ')');
    }

    solver(0, 0);
    return result;
};