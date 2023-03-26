// DP approach O(n) time O(n) space
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let totalCost = Array(n);
    [totalCost[n - 2], totalCost[n - 1]] = [cost[n - 2], cost[n - 1]];

    for (let i = totalCost.length - 3; i >= 0; i--) {
        totalCost[i] = cost[i] + Math.min(totalCost[i + 1], totalCost[i + 2]);
    }

    return Math.min(totalCost[0], totalCost[1]);
};