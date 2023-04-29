// backtracking - recursive solution
var combinationSum2 = function(candidates, target) {
    let combinations = [];
    candidates = candidates.sort((a, b) => (a - b))

    const backtrack = function(combination, sum, i) {
        if (sum === target) {
            combinations.push(combination);
            return;
        } else if (sum > target || i === candidates.length) {
            return;
        }

        backtrack(combination.concat(candidates[i]), sum + candidates[i], i + 1);

        let j = i;
        while (j < candidates.length && candidates[i] === candidates[j]) {
            j++;
        }
        backtrack(combination, sum, j);
    }

    backtrack([], 0, 0);
    return combinations;
};