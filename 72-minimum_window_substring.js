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



// LESS OPTIMAL SOLN (not actually sure that this works, it's quite slow)
// let minWindow = '';
//     for (let l = 0; l < s.length; l++) {
//         if (t.indexOf(s[l]) < 0) continue;
//         let tCopy = t.slice(0);
//         let r = l;
//         while (r < s.length) {
//             let index = tCopy.indexOf(s[r]);
//             if (index > -1) {
//                 tCopy = tCopy.slice(0, index) + tCopy.slice(index + 1);
//             }
//             if (!tCopy.length) {
//                 let window = s.slice(l, r + 1);
//                 console.log(window);
//                 if (window.length < minWindow.length || minWindow === '') minWindow = window;
//                 break;
//             }
//             r++;
//         }
//     }
//     return minWindow;