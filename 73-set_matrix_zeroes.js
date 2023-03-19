var setZeroes = function(m) {
  var rowsToZero = [];
  var colsToZero = [];
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i][j] === 0) {
        rowsToZero.push(i);
        colsToZero.push(j);
      }
    }
  }
  for (var i = 0; i < rowsToZero.length; i++) {
    m[rowsToZero[i]] = m[rowsToZero[i]].fill(0);
  }
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < colsToZero.length; j++) {
      m[i][colsToZero[j]] = 0;
    }
  }
  return m
};