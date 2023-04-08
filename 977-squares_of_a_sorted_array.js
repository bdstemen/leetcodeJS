var sortedSquares = function(nums) {
    return nums.map(num => num * num).sort((a, b) => (a - b));
};



var sortedSquares = function(nums) {
  let result = Array(nums.length - 1);
  let l = 0;
  let r = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
      if ((nums[r] ** 2 > nums[l] ** 2)) {
          result[i] = nums[r] ** 2;
          r--;
      } else {
          result[i] = nums[l] ** 2;
          l++;
      }
  }

  return result;
};