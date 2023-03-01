var KthLargest = function(k, nums) {
    this.heap = this.createHeap(k, nums);
    this.k = k;
};

KthLargest.prototype.createHeap = function(k, nums) {
    let sortedNums = nums.sort((a, b) => (b - a)).slice(0, k);
    return sortedNums;
};

KthLargest.prototype.add = function(val) {
    if (val < this.heap[this.k - 1]) return this.heap[this.k - 1];

    this.heap.push(val);
    let i = this.heap.length - 1;
    let swap = true;

    while (i && swap) {
        if (this.heap[i] > this.heap[i - 1]) {
            [this.heap[i - 1], this.heap[i]] = [this.heap[i], this.heap[i - 1]]
            i--;
        } else {
            swap = false;
        }
    }

    if (this.heap.length > this.k) this.heap.pop();
    return this.heap[this.k - 1];
};