var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    var dirs = ['R', 'D', 'L', 'U'];
    let [top, right, left, bottom] = [0, matrix[0].length, 0, matrix.length];
    let res = [];
    let canMove = true;
    while (canMove) {
        dirs.every((dir) => {
        if (dir === 'R') {
            res.push(...matrix[top].slice(left, right));
            top++;
        } else if (dir === 'D') {
            for (let k = top; k < bottom; k++) {
            res.push(matrix[k][right - 1]);
            }
            right--;
        } else if (dir === 'L') {
            for (let k = right - 1; k >= left; k--) {
            res.push(matrix[bottom - 1][k]);
            }
            bottom--;
        } else if (dir === 'U') {
            for (let k = bottom - 1; k >= top; k--) {
            res.push(matrix[k][left]);
            }
            left++;
        }
        if (left === right || top === bottom) {
            canMove = false;
            return false;
        }
        return true;
        });
    }
    return res;
};