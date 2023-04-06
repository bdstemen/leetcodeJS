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