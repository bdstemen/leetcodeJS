var findDisappearedNumbers = function(nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        while ((nums[i] !== i + 1) && (nums[i] !== nums[nums[i] - 1])) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i]
            nums[i] = temp;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) results.push(i + 1);
    }

    return results;
};