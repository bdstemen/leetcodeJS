// Initial solution
var isValidSudoku = function(board) {
  if (!checkRows(board)) return false;
  if (!checkCols(board)) return false;
  if (!checkGrids(board)) return false;
  return true;
};

const isValidArray = (array) => {
  let nums = array.filter(val => val !== '.');
  let set = new Set(nums);
  return nums.length === set.size
};

const checkRows = (board) => {
  for (let row = 0; row < 9; row++) {
      if (!isValidArray(board[row])) return false;
  }
  return true;
};

const checkCols = (board) => {
  let colArray;
  for (let col = 0; col < 9; col++) {
      colArray = [];
      for (let row = 0; row < 9; row++) {
          colArray.push(board[row][col]);
      }
      if (!isValidArray(colArray)) return false;
  }
  return true;
}

const checkGrids = (board) => {
  for (let gridRow = 1; gridRow < 4; gridRow++) {
      for (let gridCol = 1; gridCol < 4; gridCol++) {
          if (!isValidArray(makeGrid(gridRow, gridCol, board))) return false;
      }
  }
  return true;
};

const makeGrid = (gridRow, gridCol, board) => {
  let gridArray = [];
  indices[gridRow].forEach(row => {
      indices[gridCol].forEach(col => {
          gridArray.push(board[row][col]);
      })
  })
  console.log(gridArray);
  return gridArray;
}

const indices = {
  1: [0, 1, 2],
  2: [3, 4, 5],
  3: [6, 7, 8]
};


// optimized solution
var isValidSudoku = function(board) {
  const set = new Set()

  //i rows, j columns
  //check valid columns and rows O(9*9)
  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++){
          const value = board[i][j]
          if(value !== "."){
              const rowString = `${value} at row ${i}`
              const colString = `${value} at col ${j}`
              const boxString = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`

              if(set.has(rowString) || set.has(colString) || set.has(boxString)){
                  return false
              }else{
                  set.add(rowString)
                  set.add(colString)
                  set.add(boxString)
              }
          }
      }
  }

  return true
};