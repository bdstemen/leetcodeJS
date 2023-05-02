var searchRange = function(nums, target) {
    let result = [-1, -1];
    let l = 0;
    let r = nums.length - 1;
    let m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] === target && nums[m - 1] !== nums[m]) {
            result[0] = m;
            break;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = nums.length - 1;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] === target && nums[m + 1] !== nums[m]) {
            result[1] = m;
            break;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return result;
};