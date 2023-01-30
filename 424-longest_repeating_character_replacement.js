/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// var characterReplacement = function(s, k) {
//     let charCount = {};
//     let max = 0;
//     let l = 0;
//     let r = 0;
//     charCount[s[r]] = 1

//     while (r < s.length) {
//         if (isValid(charCount, k)) {
//             max = Math.max(max, (r - l + 1));
//             r++;
//             charCount[s[r]] = charCount.hasOwnProperty(s[r]) ? charCount[s[r]] + 1 : 1;
//         } else {
//             charCount[s[l]]--;
//             l++;
//         }
//     }

//     return max;
// };

// const isValid = (charCount, k) => {
//     let commonChar = 0;
//     let total = 0;
//     for (let char in charCount) {
//         total += charCount[char];
//         commonChar = Math.max(commonChar, charCount[char]);
//     }
//     return (total - commonChar) <= k;
// }


// Optimized soln
var characterReplacement = function(s, k) {
  let charCount = {};
  let max = 0;
  let maxFrequency = 1;
  let l = 0;
  let r = 0;
  charCount[s[r]] = 1
  let isValid;

  while (r < s.length) {
      isValid = ((r - l + 1) - maxFrequency <= k);
      if (isValid) {
          max = Math.max(max, (r - l + 1));
          r++;
          charCount[s[r]] = charCount.hasOwnProperty(s[r]) ? charCount[s[r]] + 1 : 1;
          if (charCount[s[r]] > maxFrequency) maxFrequency = charCount[s[r]];
      } else {
          charCount[s[l]]--;
          l++;
      }
  }

  return max;
};