/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// RECURSIVE APPROACH

// var search = function(nums, target, l = 0, r = nums.length - 1) {
//     if (l > r) return -1;

//     let m = Math.floor((l + r) / 2);

//     if (nums[m] === target) return m;
//     else if (nums[m] > target) return search(nums, target, l, m - 1);
//     else return search(nums, target, m + 1, r);
// };

// ITERATIVE APPROACH

var search = function(nums, target) {
  let l = 0;
  let r = nums.length;
  let m;

  while (l <= r) {
      m = Math.floor((l + r) / 2);
      if (nums[m] === target) return m;
      else if (nums[m] > target) r = m - 1;
      else l = m + 1;
  }
  return -1;
};