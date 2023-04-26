var missingNumber = function(nums) {
    nums.push(null);

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== null && i !== nums[i]) {
            let temp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = temp;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === null) return i;
    }
};