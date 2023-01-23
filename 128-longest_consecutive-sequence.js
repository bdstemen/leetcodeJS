/**
 * @param {number[]} nums
 * @return {number}
 */

 // I - array of numbers
 // O - length of longest consecutive sequence
 // C - must run in O(n) time
 // E - none

 // keep track of max, starting at 0
 // create a set from the array so we can access O(1) search
 // iterate through the set
    // if the set does not contain the previous number
        // set count variable to 0
        // while the set contains the next number
            // increment the count
        // set max equal to count if count is larger than current max
 // return the max

 var longestConsecutive = function(nums) {
  let max = 0;
  let set = new Set(nums);
  set.forEach(num => {
      if (!set.has(num - 1)) {
          let count = 0;
          while (set.has(num++)) {
              count++
          }
          max = Math.max(count, max);
      }
  })
  return max;
};