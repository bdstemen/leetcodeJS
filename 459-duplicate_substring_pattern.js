var repeatedSubstringPattern = function(s) {
  let duplicate = s + s;
  duplicate = duplicate.substring(1, duplicate.length - 1);

  return duplicate.includes(s);
};



var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false;

    let pattern = '';

    for (let i = 0; i < s.length / 2; i++) {
        pattern += s[i];
        if (!s.split(pattern).join('').length) return true;
    }

    return false;
};