var subsetsWithDup = function(nums) {
    let powerSet = [];

    let backtrack = function(i, curr, cache) {
        if (i === nums.length) {
            powerSet.push(curr);
            return;
        }

        if (!cache.hasOwnProperty(nums[i])) {
            backtrack(i + 1, curr, {...cache});
        }

        cache[nums[i]] = cache[nums[i]] ? cache[nums[i]] + 1 : 1;
        backtrack(i + 1, curr.concat(nums[i]), cache);
    }

    backtrack(0, [], {});
    return powerSet;
};
