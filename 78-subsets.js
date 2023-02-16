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