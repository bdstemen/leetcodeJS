// O(nlogn) time O(1) space;
var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a);
    return Math.max((nums[0] * nums[1] * nums[2]), (nums[0] * nums[nums.length - 1] * nums[nums.length - 2]))
};

// O(n) time O(1) space
// this solution is faster and less memory intensive than like 99% of LC solutions, but its real ugly
var maximumProduct = function(nums) {
    let max1 = max2 = max3 = -Infinity;
    let min1 = min2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max((max1 * max2 * max3), (max1 * min1 * min2));
};