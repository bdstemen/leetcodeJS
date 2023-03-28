// brute force solution O(n^2) time O(1) space
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[i];
        }
    }
};

// O(n) time O(n) space with hashing
var findDuplicate = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash.hasOwnProperty(nums[i])) return nums[i];
        else hash[nums[i]] = i;
    }
};