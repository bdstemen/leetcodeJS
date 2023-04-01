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

    let backtrack = function(i, curr) {
        if (i === nums.length) {
            subsets.push(curr);
            return;
        }

        backtrack(i + 1, curr.concat(nums[i]));
        backtrack(i + 1, curr);
    }

    backtrack(0, []);
    return subsets;
};

// pure recursive solution
var subsets = function(nums, i = 0, curr = []) {
    let results = [];

    if (i === nums.length) {
        results.push(curr)
    } else {
        results = results.concat(subsets(nums, i + 1, curr.concat(nums[i])), subsets(nums, i + 1, curr))
    }

    return results;
};