/**
 * @param {number[]} height
 * @return {number}
 */
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