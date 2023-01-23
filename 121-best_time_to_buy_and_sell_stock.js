/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let buy = 0;
  let sell = 1;
  let max = 0;

  while (sell < prices.length) {
      max = Math.max(max, (prices[sell] - prices[buy]));
      if (prices[sell] < prices[buy]) {
          buy = sell;
      }
      sell++;
  }

  return max;
};