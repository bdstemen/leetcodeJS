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