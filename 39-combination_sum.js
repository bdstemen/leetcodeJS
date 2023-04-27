// backtracking approach
var combinationSum = function(candidates, target) {
    let combinations = [];

    const backtrack = function(combination, sum, i) {
        if (sum > target || i === candidates.length) {
            return;
        } else if (sum === target) {
            combinations.push(combination);
            return;
        }
        backtrack(combination.concat(candidates[i]), sum + candidates[i], i);
        backtrack(combination, sum, i + 1);
    };

    backtrack([], 0, 0);
    return combinations;
};

// pure recursive solution
var combinationSum = function(candidates, target, curr = []) {
  let combinations = [];
  let sum = curr.reduce((acc, cv) => acc + cv, 0);

  if (sum === target) {
      combinations.push(curr);
  } else if (candidates.length && sum < target) {
      combinations = combinations.concat(combinationSum(candidates.slice(1), target, curr), combinationSum(candidates, target, curr.concat(candidates[0])));
  }

  return combinations;
};