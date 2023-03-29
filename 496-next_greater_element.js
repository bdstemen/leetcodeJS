var nextGreaterElement = function(nums1, nums2) {
    let result = Array(nums1.length);
    for (let i = 0; i < result.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let nextGreatest = -1;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                nextGreatest = nums2[j];
                break;
            }
        }
        result[i] = nextGreatest;
    }
    return result;
};