// DP approach
var canJump = function(nums) {
    let dp = new Array(nums.length).fill(false);
    dp[0] = true;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && (j + nums[j]) >= i) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[nums.length - 1];
};

// greedy solution: O(n) time O(1) space
var canJump = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if ((nums[i] + i) >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};