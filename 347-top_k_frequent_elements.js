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