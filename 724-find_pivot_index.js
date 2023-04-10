var pivotIndex = function(nums) {
    let sumToLeft = 0;
    let sumToRight = nums.reduce((sum, currVal) => (sum + currVal), 0);

    for (let i = 0; i < nums.length; i++) {
        sumToRight -= nums[i];
        if (sumToRight === sumToLeft) return i;
        sumToLeft += nums[i];
    }

    return -1;
};