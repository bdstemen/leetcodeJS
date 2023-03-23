// brute force
var canPartition = function(nums) {
    let result = false;
    let target = nums.reduce((acc, curr) => (acc + curr), 0) / 2;

    let partition = function(i, sum) {
        if (i === nums.length) {
            if (sum === target) result = true;
            return;
        } else {
            partition(i + 1, sum + nums[i]);
            partition(i + 1, sum);
        }
    }

    if (nums.length > 1) partition(0, 0);
    return result;
};