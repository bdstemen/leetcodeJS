/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // I - two strings
 // O - boolean: true if the two words are anagrams, false otherwise
 // C - none
 // E - none

 // hash each word, then compare the values

 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let chars = {};

  for (let i = 0; i < s.length; i++) {
      chars[s[i]] = (chars[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
      if (!chars[t[i]]) return false;
      chars[t[i]]--;
  }
  return true;
};

// same strat, with helper func
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let sCharCount = hashString(s);
    let tCharCount = hashString(t);

    for (let char in sCharCount) {
        if (sCharCount[char] !== tCharCount[char]) return false;
    }

    return true;
};

var hashString = function(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = charCount[str[i]] + 1 || 1;
    }
    return charCount
}