var climbStairs = function(n, curr = 0) {
  let ways = 0;

  if (curr > n) {
      ways += 0;
  } else if (curr === n) {
      ways += 1;
  } else {
      [1, 2].forEach((step) => {
          ways = ways + climbStairs(n, curr + step);
      })
  }

  return ways;
};