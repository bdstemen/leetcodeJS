var generate = function(numRows) {
    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            let left = result[i - 1][j - 1] || 0;
            let right = result[i - 1][j] || 0;
            row.push(left + right);
        }
        result.push(row);
    }
    return result;
};