// O(n) time O(n) space
var reverseWords = function(s) {
    let sentence = [];
    let i = 0;

    while (i < s.length) {
        let word = '';

        while (i < s.length && s[i] === ' ') {
            i++;
        }

        while (i < s.length && s[i] !== ' ') {
            word += s[i];
            i++
        }

        if (word.length) sentence.push(word);
    }

    return sentence.reverse().join(' ');
};