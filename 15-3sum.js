// O(n * logn) time complexity?
 var threeSum = function(nums) {
  let result = [];
  let sum, l, r;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] === nums[i - 1]) continue;

      l = i + 1;
      r = nums.length - 1;

      while (l < r) {
          sum = nums[l] + nums[r] + nums[i];

          if (sum === 0) {
              result.push([nums[l], nums[r], nums[i]]);
              while (nums[l] + nums[r] + nums[i] === sum) {
                  l++;
              }
          } else if (sum > 0) {
              while (nums[l] + nums[r] + nums[i] === sum) {
                  r--;
              }
          } else {
              while (nums[l] + nums[r] + nums[i] === sum) {
                  l++;
              }
          }
      }
  }
  return result;
};