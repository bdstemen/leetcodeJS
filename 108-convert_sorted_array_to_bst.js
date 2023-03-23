// O(n) time? O(n) space
var sortedArrayToBST = function(nums) {
    let assembleTree = function(l, r) {
        if (l > r) return null;
        let mid = Math.floor((l + r) / 2);
        let node = new ListNode(nums[mid]);
        node.left = assembleTree(l, mid - 1);
        node.right = assembleTree(mid + 1, r);
        return node;
    }

    return assembleTree(0, nums.length - 1);
};

// pure recursive solution
var sortedArrayToBST = function(nums, l = 0, r = nums.length - 1) {
    if (l > r) return null;
    let mid = Math.floor((l + r) / 2);
    let node = new ListNode(nums[mid]);
    node.left = sortedArrayToBST(nums, l, mid - 1);
    node.right = sortedArrayToBST(nums, mid + 1, r);
    return node;
};