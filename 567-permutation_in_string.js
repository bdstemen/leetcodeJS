// O(n * m) time
var checkInclusion = function(s1, s2) {
  let s1Chars = {};
  let windowChars = {};
  let l = 0;
  let r = s1.length - 1;

  for (let i = 0; i < s1.length; i++) {
      s1Chars[s1[i]] = s1Chars[s1[i]] + 1 || 1;
      windowChars[s2[i]] = windowChars[s2[i]] + 1 || 1;
  }

  while (r < s2.length) {
      if (isPermutation(s1Chars, windowChars)) return true;

      r++;
      windowChars[s2[r]] = windowChars[s2[r]] + 1 || 1;
      windowChars[s2[l]]--;
      l++
  }

  return false;
};

var isPermutation = function(key, curr) {
  for (char in key) {
      if (curr[char] !== key[char]) return false;
  }
  return true;
}