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