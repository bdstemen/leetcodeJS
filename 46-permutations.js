/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums, curr = []) {

  let result = []

  if (!nums.length) {
      result.push(curr);
  } else {
      nums.forEach((num, i) => {
          let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
          result = result.concat(permute(remainingNums, curr.concat(num)));
          remainingNums = nums;
      })
  }

  return result;
};

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums, curr = []) {
//     if (nums.length < 2) return [nums];

//     let result = []

//     if (curr.length === nums.length) {
//         result.push(curr);
//     } else {
//         nums.forEach((num) => {
//             if (!curr.includes(num)) {
//                 result = result.concat(permute(nums, curr.concat(num)));
//             }
//         })
//     }

//     return result;
// };