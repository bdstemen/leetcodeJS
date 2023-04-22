// O(n) time, o(n) ? space
var majorityElement = function(nums) {
    let numCount = {};

    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = numCount[nums[i]] + 1 || 1;
        if (numCount[nums[i]] > nums.length / 2) return nums[i];
    }
};