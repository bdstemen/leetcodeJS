// brute force O(n^2) time complexity
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


// DP approach
var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => (acc + curr), 0);

    if (sum % 2 === 1) return false;
    target = sum / 2;

    let cache = Array(target + 1).fill(false);
    cache[0] = true;

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        for (let j = target; j >= 0; j--) {
            let complement = j - num;

            if (cache[complement]) cache[j] = true;
            if (cache[target]) return true;
        }
    }
    return false;
};