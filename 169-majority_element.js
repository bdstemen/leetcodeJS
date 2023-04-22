// O(n) time, o(n) ? space
var majorityElement = function(nums) {
    let numCount = {};

    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = numCount[nums[i]] + 1 || 1;
        if (numCount[nums[i]] > nums.length / 2) return nums[i];
    }
};

// O(n) time, O(1) space
var majorityElement = function(nums) {
  let i = 0;
  let result;

  while (i < nums.length) {
      result = nums[i];
      let count = 1;
      i++;

      while (count > 0 && i < nums.length) {
          if (nums[i] === result) {
              count++;
          } else {
              count--;
          }
          i++;
      }
  }

  return result;
};