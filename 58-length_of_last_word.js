// o(n) time and space
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};