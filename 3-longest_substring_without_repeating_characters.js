
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

// O(n) time
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let max = 0;
    let sub = new Set();
    for (let r = 0; r < s.length; r++) {
        while (sub.has(s[r])) {
            sub.delete(s[l]);
            l++;
        }
        sub.add(s[r]);
        max = Math.max(max, sub.size);
    }
    return max;
};