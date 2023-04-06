// heap solution O(n + log(k)?) time - not good enough for leetcode
var findKthLargest = function(nums, k) {
    let heap = [];
    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]);
        let n = heap.length - 1

        if (heap[n] > heap[n - 1]) {
            while (n > 0 && heap[n] > heap[n - 1]) {
                [heap[n - 1], heap[n]] = [heap[n], heap[n - 1]];
                n--;
            }
        }

        if (heap.length > k) {
            heap.pop();
        }
    }

    return heap[k - 1];
};

var findKthLargest = function(nums, k) {
    const quickSelect = function(l, r) {
        let pivot = nums[r];
        let p = l;

        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++;
            }
        }

        [nums[p], nums[r]] = [nums[r], nums[p]];

        if ((nums.length - p) === k) return pivot;
        else if ((nums.length - p) < k) return quickSelect(l, p - 1);
        else return quickSelect(p + 1, r);
    }

    return quickSelect(0, nums.length - 1);
};