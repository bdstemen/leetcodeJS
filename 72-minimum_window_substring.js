/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let result = '';
  let resultLen = Infinity;
  let tCount = {};
  let windowCount = {};

  for (let i = 0; i < t.length; i++) {
      tCount[t[i]] = tCount[t[i]] + 1 || 1;
  }

  let need = Object.keys(tCount).length;
  let have = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
      let charR = s[r];
      if (tCount.hasOwnProperty(charR)) {
          windowCount[charR] = windowCount[charR] + 1 || 1;
          if (windowCount[charR] === tCount[charR]) {
              have++;
          }
          while (have === need) {
              let charL = s[l];
              if ((r - l + 1) < resultLen) {
                  resultLen = r - l + 1;
                  result = s.slice(l, r + 1);
              }
              if (tCount.hasOwnProperty(charL)) {
                  windowCount[charL]--;
                  if (windowCount[charL] < tCount[charL]) {
                      have--;
                  }
              }
              l++;
          }
      }
  }