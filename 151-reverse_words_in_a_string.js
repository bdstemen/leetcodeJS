// O(n) time O(n) space
var reverseWords = function(s) {
  let reversed = '';
  s = s.split(' ');

  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '') continue;
      else reversed += `${s[i]} `;
  }

  return reversed.trim();
};