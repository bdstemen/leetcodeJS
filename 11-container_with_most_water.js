/**
 * @param {number[]} height
 * @return {number}
 */
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