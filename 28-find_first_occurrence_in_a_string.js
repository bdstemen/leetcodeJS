

var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            while (needle[j] === haystack[i + j] && j < needle.length) {
                j++
            }
            if (j === needle.length) return i;
        }
    }
    return -1;
};

// slightly faster solution, still O(N x M) worst case time complexity
var strStr = function(haystack, needle) {
    let i = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            while (needle[j] === haystack[i] && j < needle.length) {
                i++;
                j++;
            }
            if (j === needle.length) return i - j;
            else i = i - j + 1;
        } else {
            i++;
        }
    }
    return -1;
};

// simple solution using slice
var strStr = function(haystack, needle) {
  let i = 0;
  while (i < haystack.length) {
      if (haystack[i] === needle[0]) {
          let slice = haystack.slice(i, i + needle.length);
          if (slice === needle) return i;
      }
      i++;
  }
  return -1;
};