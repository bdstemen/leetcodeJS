var numIslands = function(grid) {
    let islands = 0;
    let height = grid.length;
    let width = grid[0].length;

    let populateIsland = function(row, col) {
        if (row < 0 || col < 0 || row >= height || col >= width) return;
        if (grid[row][col] === '0') return;

        grid[row][col] = '0';
        populateIsland(row - 1, col);
        populateIsland(row + 1, col);
        populateIsland(row, col - 1);
        populateIsland(row, col + 1);
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            curr = grid[row][col];

            if (curr === '1') {
                islands++;
                populateIsland(row, col)
            }
        }
    }

    return islands;
};