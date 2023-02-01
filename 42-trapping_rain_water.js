/**
 * @param {number[]} height
 * @return {number}
 */

// BASIC SOLN
// O(n) time
// O(n) space

var trap = function(height) {
  let maxL = Array(height.length);
  let maxR = Array(height.length);
  let max = 0;
  let totalWater = 0;
  let colWater;

  for (let i = 0; i < height.length; i++) {
      maxL[i] = max;
      max = Math.max(max, height[i]);
  }

  max = 0;
  for (let i = height.length - 1; i > -1; i--) {
      maxR[i] = max;
      max = Math.max(max, height[i]);
  }

  for (let i = 0; i < height.length; i++) {
      colWater = Math.min(maxL[i], maxR[i]) - height[i];
      totalWater += Math.max(0, colWater);
  }

  return totalWater;
};


// OPTIMIZED SOLN (two pointers)
// O(n) time
// O(1) space

var trap = function(height) {
    let water = 0;
    let maxL = 0;
    let maxR = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        if (height[l] <= height[r]) {
            water += Math.max((maxL - height[l]), 0);
            maxL = Math.max(maxL, height[l]);
            l++;
        } else {
            water += Math.max((maxR - height[r]), 0);
            maxR = Math.max(maxR, height[r]);
            r--;
        }
    }
    return water;
};