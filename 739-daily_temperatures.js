/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// BRUTE FORCE
// O(n^2) time
// O(1) space, not including result

var dailyTemperatures = function(temperatures) {
  let result = Array(temperatures.length);
  for (let i = 0; i < temperatures.length; i++) {
      let day = i + 1;
      while (day < temperatures.length) {
          if (temperatures[day] > temperatures[i]) {
              result[i] = day - i;
              break;
          }
          day++;
      }
      if (!result[i]) result[i] = 0;
  }
  return result;
};