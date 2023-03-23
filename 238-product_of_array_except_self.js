/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n^2) solution:
// var productExceptSelf = function(nums) {
//     return nums.map((num, i) => {
//         let copy = nums.slice(0);
//         copy.splice(i, 1);
//         return copy.reduce((curr, prod) => {
//             return prod * curr;
//         }, 1)
//     })
// };

// O(n) solution with O(n) space complexity
// var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let prefix = new Array(n);
//     prefix[0] = 1;
//     let suffix = new Array(n);
//     suffix[n - 1] = 1;
//     let output = new Array(n);


//     for (let i = 1; i < n; i++) {
//         prefix[i] = prefix[i - 1] * nums[i - 1];
//     }

//     for (let i = n - 2; i > -1; i--) {
//         suffix[i] = suffix[i + 1] * nums[i + 1];
//     }

//     for (let i = 0; i < n; i++) {
//         output[i] = prefix[i] * suffix [i];
//     }

//     return output;
// };

// O(n) solution with O(1) space complexity
var productExceptSelf = function(nums) {
  let n = nums.length;
  let output = new Array(n).fill(1);
  let temp = 1;

  for (let i = 0; i < n; i++) {
      output[i] *= temp;
      temp *= nums[i];
  }

  temp = 1;

  for (let i = n - 1; i > -1; i--) {
      output[i] *= temp;
      temp *= nums[i];
  }

  return output;
};