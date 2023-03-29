// brute force solution O(n^2) timed out
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