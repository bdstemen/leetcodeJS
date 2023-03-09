var minAddToMakeValid = function(s) {
    let inserts = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];

        if (curr === '(') {
            stack.push(curr);
            continue;
        }

        if (stack.length) {
            stack.pop();
        } else {
            inserts++;
        }
    }

    return inserts + stack.length;
};