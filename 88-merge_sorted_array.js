var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    for (let i = 0; i < n; i++) {
        nums1.pop();
    }

    while (i < nums1.length && j < nums2.length) {
        while (nums1[i] < nums2[j]) {
            i++;
        }

        if (i < nums1.length) {
            nums1.splice(i, 0, nums2[j]);
            j++;
        }
    }

    while (j < nums2.length) {
        nums1.push(nums2[j]);
        j++;
    }
};

// filling from the end: O(n) time complexity
var merge = function(nums1, m, nums2, n) {
    let last = n + m - 1;

    while (m > 0 && n > 0) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }

    while  (n > 0) {
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
};