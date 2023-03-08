var twoSum = function(nums, target) {
  let complements = {};
  for (let i = 0; i < nums.length; i++) {
      if (complements.hasOwnProperty(nums[i])) return [complements[nums[i]], i]
      else complements[target - nums[i]] = i
  }
};