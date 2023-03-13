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

// Dynamic Programming method
var climbStairs = function(n) {
    let temp;
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        temp = one;
        one = one + two;
        two = temp;
    }

    return one;
};