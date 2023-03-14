var search = function(nums, target) {
    let pivot, leftTargetIndex, rightTargetIndex, targetIndex;

    if (nums[0] > nums[nums.length - 1]) {
        pivot = findPivot(nums, 0, nums.length - 1);

        if (target <= nums[nums.length - 1]) {
            rightTargetIndex = findTarget(nums, pivot, nums.length - 1, target);
            return rightTargetIndex;
        } else {
            leftTargetIndex = findTarget(nums, 0, pivot - 1, target);
            return leftTargetIndex;
        }
    } else {
        targetIndex = findTarget(nums, 0, nums.length - 1, target);
        return targetIndex;
    }
};

const findPivot = (array, left, right) => {
    let middle = Math.floor((left + right) / 2);
    if (middle === left) return right;
    else if (array[left] > array[middle]) return findPivot(array, left, middle);
    else if (array[middle] > array[right]) return findPivot(array, middle, right);
};

const findTarget = (array, left, right, target) => {
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    else if (target < array[middle]) return findTarget(array, left, middle - 1, target);
    else if (target > array[middle]) return findTarget(array, middle + 1, right, target);
};