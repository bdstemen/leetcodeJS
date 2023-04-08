// optimized solution
var merge = function(intervals) {
  intervals.sort((a, b) => (a[0] - b[0]));
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      let prevEnd = result[result.length - 1][1];
      let currStart = intervals[i][0];
      let currEnd = intervals[i][1]

      if (prevEnd >= currStart) {
          result[result.length - 1][1] = Math.max(prevEnd, currEnd);
      } else {
          result.push(intervals[i]);
      }
  }

  return result;
};