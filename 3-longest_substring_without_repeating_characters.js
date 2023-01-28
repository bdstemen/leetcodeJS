/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let char, index;
  let sub = '';
  let max = 0;
  for (let i = 0; i < s.length; i++) {
      char = s[i];
      sub += char;
      index = sub.indexOf(char);
      if (index !== sub.length - 1) {
          sub = sub.slice(index + 1);
      }
      max = Math.max(max, sub.length);
  }
  return max;
};