// brute force solution O(n^2) time
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

// stack solution O(n + m) time
var nextGreaterElement = function(nums1, nums2) {
    let result = Array(nums1.length);
    let hash = {};
    let stack = [];

    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = -1;
    }

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            hash[stack[stack.length - 1]] = nums2[i];
            stack.pop();
        }

        if (hash.hasOwnProperty(nums2[i])) {
            stack.push(nums2[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        result[i] = hash[nums1[i]];
    }

    return result;
};