

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