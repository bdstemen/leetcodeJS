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