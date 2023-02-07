var minEatingSpeed = function(piles, h) {
  let max = Math.max(...piles);
  for (let k = 1; k <= max; k++) {
      let hours = 0;
      for (let i = 0; i < piles.length; i++) {
          let pile = piles[i];
          while (pile > 0) {
              pile -= k;
              hours++;
              if (hours > h) break;
          }
      }
      if (hours <= h) return k;
  }
};


// OPTIMIZED SOLN
var minEatingSpeed = function(piles, h) {
  let r = Math.max(...piles);
  let l = 1;

  while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (eatBananas(piles, m) <= h) {
          r = m;
      } else {
          l = m + 1;
      }
  }
  return l;
};

var eatBananas = function(piles, k) {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k);
  }
  return hours;
};
