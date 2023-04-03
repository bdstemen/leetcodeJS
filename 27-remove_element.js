var removeElement = function(nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++
        }
    }
    return nums.length;
};

var removeElement = function(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          j++
      }
  }
  return j;
};