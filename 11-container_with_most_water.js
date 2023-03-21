// initial solution O(n) time O(1) space
 var maxArea = function(height) {
  let max = 0;
  let vol;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
      vol = ((r - l) * Math.min(height[l], height[r]));
      if (vol > max) max = vol;
      (height[l] < height[r]) ? l++ : r--;
  }
  return max;
};


// optimized O(n) time O(1) space
var maxArea = function(height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};