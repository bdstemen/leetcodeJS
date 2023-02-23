var findMin = function(nums) {
    let res = nums[0];
    let l = 0;
    let r = nums.length - 1;
    let m;

    while (l <= r) {
        if (nums[l] < nums[r]) {
            res = Math.min(res, nums[l]);
            break;
        }

        m = Math.floor((l + r) / 2);
        res = Math.min(res, nums[m]);

        if (nums[l] <= nums[m]) l = m + 1;
        else r = m - 1;
    }

    return res;
};