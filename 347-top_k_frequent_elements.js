/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  if (nums.length === 1) return nums;

  let numsHash = {};
  nums.forEach(num => {
      if (numsHash.hasOwnProperty(num)) numsHash[num]++;
      else numsHash[num] = 1;
  })

  return Object.entries(numsHash)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((keyValPair) => keyValPair[0]);
};


// bucket sort method:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numCount = {};
    let buckets = [];
    let result = [];

    for (let i = 0; i <= nums.length; i++) {
        buckets.push([]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (numCount.hasOwnProperty(nums[i])) numCount[nums[i]]++;
        else numCount[nums[i]] = 1;
    }

    for (let num in numCount) {
        let count = numCount[num];
        buckets[count].push(num);
    }

    for (let i = buckets.length - 1; i > -1; i--) {
        if (buckets[i]) result.push(...buckets[i]);
        if (result.length === k) return result;
    }
};


var topKFrequent = function(nums, k) {
    let buckets = new Array(nums.length);
    let numCount = {};
    let result = [];

    for (let i = 0; i <= nums.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = numCount[nums[i]] + 1 || 1;
    }

    for (let num in numCount) {
        buckets[numCount[num]].push(num);
    }

    for (let i = buckets.length - 1; i > -1; i--) {
        if (buckets[i]) result.push(...buckets[i]);
        if (result.length === k) return result;
    }
};