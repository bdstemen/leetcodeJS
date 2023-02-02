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

// OPTIMIZED SOLUTION
// O(n) time
// O(n) space

var dailyTemperatures = function(temps) {
  let result = Array(temps.length).fill(0);
  let stack = [];
  for (let i = 0; i < temps.length; i++) {
      while (stack.length && temps[i] > stack[stack.length - 1][0]) {
          let day = stack.pop();
          result[day[1]] = i - day[1];
      }
      stack.push([temps[i], i]);
  }
  return result;
};