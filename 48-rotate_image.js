
var rotate = function(matrix) {
    let l = 0;
    let r = matrix.length - 1;

    while (l < r) {
        let t = l;
        let b = r;
        for (let i = 0; i < r - l; i++) {
            // save tl
            let temp = matrix[t][l + i];

            // bl -> tl
            matrix[t][l + i] = matrix[b - i][l];

            // br -> bl
            matrix[b - i][l] = matrix[b][r - i];

            // tr -> br
            matrix[b][r - i] = matrix[t + i][r];

            // temp -> tr
            matrix[t + i][r] = temp;
        }
        l++;
        r--;
    }
    return matrix;
};