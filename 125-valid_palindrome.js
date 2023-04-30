// O(n) time, O(n) space
var isPalindrome = function(s) {
  let filteredString = s.toLowerCase().split('').filter(char => (/[0-9a-z]/).test(char)).join('');
  let filteredReversedString = filteredString.split('').reverse().join('');

  return filteredString === filteredReversedString;
};

// optimized solution - O(n) time O(1) space
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
      if (!(/[0-9a-zA-Z]/).test(s[l])) {
          l++;
          continue;
      } else if (!(/[0-9a-zA-Z]/).test(s[r])) {
          r--;
          continue;
      }

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
      l++;
      r--;
  }

  return true;
};