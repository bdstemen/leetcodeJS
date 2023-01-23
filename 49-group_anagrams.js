/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
  if (strs.length === 1) return [strs];

  // const sortedStrs = strs.map(str => str.split('').sort().join(''));

  // const strsMap = {};
  // for (let i = 0; i < sortedStrs.length; i++) {
  //     if (strsMap.hasOwnProperty(sortedStrs[i])) {
  //         strsMap[sortedStrs[i]].push(i);
  //     } else {
  //         strsMap[sortedStrs[i]] = [i];
  //     }
  // }

  // return Object.values(strsMap).map((array) => {
  //     return array.map((index) => strs[index]);
  // })
  let strsMap = {};

  strs.forEach((str) => {
      let sortedStr = str.split('').sort().join('');
      if (strsMap.hasOwnProperty(sortedStr)) {
          strsMap[sortedStr].push(str);
      } else {
          strsMap[sortedStr] = [str];
      }
  })
  return Object.values(strsMap);
};