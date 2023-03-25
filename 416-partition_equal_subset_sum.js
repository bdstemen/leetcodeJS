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


// first try DP approach
var canPartition = function(nums) {
    let cache = [0];
    let target = nums.reduce((acc, curr) => (acc + curr), 0) / 2;

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let len = cache.length;

        for (let j = 0; j < len; j++) {
            let sum = curr + cache[j];
            if (sum === target) return true;
            cache.push(sum);
        }
    }

    return false;
};