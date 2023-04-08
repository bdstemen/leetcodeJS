// cyclic sort solution
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


// alternate solution
var findDisappearedNumbers = function(nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) - 1;
        nums[j] = -1 * Math.abs(nums[j]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) results.push(i + 1);
    }

    return results;
};