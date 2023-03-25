var combinationSum = function(candidates, target) {
    let combinations = [];

    let generateCombinations = function(nums, curr) {
        let sum = curr.reduce((acc, cv) => acc + cv, 0);

        if (sum === target) {
            combinations.push(curr);
            return;
        } else if (sum > target) {
            return;
        } else if (!nums.length) {
            return;
        }

        generateCombinations(nums.slice(1), curr);
        generateCombinations(nums, curr.concat(nums[0]));
    }

    generateCombinations(candidates, []);
    return combinations;
};