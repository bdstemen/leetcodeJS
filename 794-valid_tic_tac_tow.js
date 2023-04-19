//
var validTicTacToe = function(board) {
    let count = countXO(board);
    let rows = checkRows(board);
    let cols = checkCols(board);
    let diagonals = checkDiagonals(board);
    let wins = {
        'x': rows['x'] + cols['x'] + diagonals['x'],
        'o': rows['o'] + cols['o'] + diagonals['o']
    };

    console.log(diagonals);

    // count of x must be equal to o or o + 1 (since x goes first)
    if (count['x'] > count['o'] + 1 || count['x'] < count['o']) return false;

    // since x goes first, if x wins, count x will be = o - 1
    if (wins['x'] && count['x'] !== count['o'] + 1) return false;

    // if o wins, count x will equal count o
    if (wins['o'] && count['x'] === count['o'] + 1) return false;

    // there can only be one win from rows or columns, respectively
    if (cols['x'] > 1 || cols['o'] > 1 || cols['x'] + cols['o'] > 1) return false;
    if (rows['x'] > 1 || rows['o'] > 1 || rows['x'] + rows['o'] > 1) return false;

    return true;
};

const countXO = function(board) {
    let count = {
        'x': 0,
        'o': 0
    };

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === 'X') count['x']++;
            else if (board[row][col] === 'O') count['o']++;
        }
    }

    return count;
};

const checkRows = function(board) {
    let wins = {
        'x': 0,
        'o': 0
    };

    for (let row = 0; row < 3; row++) {
        if (board[row] === 'XXX') wins['x']++;
        else if (board[row] === 'OOO') wins['o']++;
    }

    return wins;
};

const checkCols = function(board) {
    let cols = ['', '', ''];

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            cols[col] += board[row][col];
        }
    }

    return checkRows(cols);
};


// can win with 2 diagonals - not necessary
const checkDiagonals = function(board) {
    let diagonals = [board[0][0] + board[1][1] + board[2][2], board[0][2] + board[1][1] + board[2][0]];
    let wins = {
        'x': 0,
        'o': 0
    };

    console.log(diagonals);

    if (diagonals[0] === 'XXX'|| diagonals[1] === 'XXX') wins['x']++;
    if (diagonals[0] === 'OOO' || diagonals[1] === 'OOO' ) wins['o']++;

    return wins;
}