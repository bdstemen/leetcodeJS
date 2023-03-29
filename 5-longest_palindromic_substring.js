// brute force solution O(n^3) timed out
var longestPalindrome = function(s) {
    let maxLengthPalindrome = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            if (isPalindrome(substring) && substring.length > maxLengthPalindrome.length) {
                maxLengthPalindrome = substring;
            }
        }
    }
    return maxLengthPalindrome;
};

var isPalindrome = function(s) {
    let reversed = s.slice().split('').reverse().join('');
    return reversed === s;
};


// optimized solution O(n^2)
var longestPalindrome = function(s) {
    let maxLengthSubstring = '';
    for (let i = 0; i < s.length; i++) {
        let l = r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > maxLengthSubstring.length) {
                maxLengthSubstring = s.slice(l, r + 1)
            }
            l--;
            r++
        }

        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > maxLengthSubstring.length) {
                maxLengthSubstring = s.slice(l, r + 1)
            }
            l--;
            r++
        }
    }
    return maxLengthSubstring;
};