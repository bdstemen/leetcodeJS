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

// approach without using cache
var subsetsWithDup = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let powerSet = [];

    let backtrack = function(i, curr) {
        if (i === nums.length) {
            powerSet.push(curr);
            return;
        }

        if (nums[i + 1] === nums[i]) {
            let j = i;
            while (nums[j] === nums[i]) {
                j++
            }
            backtrack(j, curr);
        } else {
            backtrack(i + 1, curr);
        }

        backtrack(i + 1, curr.concat(nums[i]));
    }

    backtrack(0, []);
    return powerSet;
};