/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, top = 0, bottom = matrix.length - 1) {
  if (top > bottom) return false;

  let middle = Math.floor((top + bottom) / 2);
  let n = matrix[middle].length - 1;

  if (target >= matrix[middle][0] && target <= matrix[middle][n]){
      return searchRow(matrix[middle], target, 0, n);
  } else if (target < matrix[middle][0]) {
      return searchMatrix(matrix, target, top, middle - 1);
  } else {
      return searchMatrix(matrix, target, middle + 1, bottom);
  }
};

var searchRow = function(row, target, left = 0, right) {
  if (left > right) return false;

  let middle = Math.floor((left + right) / 2);

  if (target === row[middle]) {
      return true;
  } else if (target < row[middle]) {
      return searchRow(row, target, left, middle - 1);
  } else {
      return searchRow(row, target, middle + 1, right);
  }
};