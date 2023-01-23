/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  if (s.length < 2) return true;
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
  }

  return true;
};