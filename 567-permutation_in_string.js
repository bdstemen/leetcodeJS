//
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

//
var checkInclusion = function(s1, s2) {
  let s1Chars = Array(26).fill(0);
  let windowChars = Array(26).fill(0);
  let matches = 0;
  let l = 0;

  for (let i = 0; i < s1.length; i++) {
      s1Chars[s1.charCodeAt(i) - 97]++;
      windowChars[s2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
      if (s1Chars[i] === windowChars[i]) matches++;
  }

  for (let r = s1.length; r <= s2.length; r++) {
      if (matches === 26) return true;

      let charR = s2.charCodeAt(r) - 97;
      windowChars[charR]++;
      if (windowChars[charR] === s1Chars[charR]) matches++;
      else if (windowChars[charR] === s1Chars[charR] + 1) matches--;

      let charL = s2.charCodeAt(l) - 97;
      windowChars[charL]--;
      if (windowChars[charL] === s1Chars[charL]) matches++;
      else if (windowChars[charL] === s1Chars[charL] - 1) matches--;
      l++
  }

  return false;
};