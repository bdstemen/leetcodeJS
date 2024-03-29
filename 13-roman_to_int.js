// O(n) time O(1) space
var romanToInt = function(s) {
    let total = 0;
    let values = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000,
    };

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && values[s[i]] < values[s[i + 1]]) {
            total -= values[s[i]];
        } else {
            total += values[s[i]];
        }
    }

    return total;
};