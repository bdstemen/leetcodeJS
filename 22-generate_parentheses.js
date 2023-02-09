/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];

  const backtrack = (parens, open, close) => {
      if (close === n && open === n) {
          result.push(parens);
          return;
      }

      if (close < open) {
          backtrack(parens + ')', open, close + 1);
      }

      if (open < n) {
          backtrack(parens + '(', open + 1, close);
      }
  };

  backtrack('', 0, 0);
  return result;
};