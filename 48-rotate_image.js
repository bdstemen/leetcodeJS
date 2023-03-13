var rotate = function(matrix) {
    let t = l = 0;
    let b = r = matrix.length - 1;

    while (l < r) {
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
        t++;
        b--;
        r--;
    }
    return matrix;
};