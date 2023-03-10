var subsets = function(nums) {
  let subsets = [];

  let backtrack = function(res, rem) {
      if (!rem.length) {
          subsets.push(res);
          return
      }
      backtrack(res, rem.slice(1));
      backtrack(res.concat(rem[0]), rem.slice(1));
  }

  backtrack([], nums);
  return subsets;
};

// Cleaner solution:
var subsets = function(nums) {
    let subsets = [];

    let backtrack = function(i, result) {
        if (i >= nums.length) {
            subsets.push(result);
            return;
        }
        backtrack(i + 1, result);
        backtrack(i + 1, result.concat(nums[i]));
    }

    backtrack(0, []);
    return subsets;
};