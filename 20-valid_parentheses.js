/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let paren = s[i];
      if (paren === '(' || paren === '[' || paren === '{') stack.push(paren);
      else if (paren === ')' && stack[stack.length - 1] === '(') stack.pop();
      else if (paren === ']' && stack[stack.length - 1] === '[') stack.pop();
      else if (paren === '}' && stack[stack.length - 1] === '{') stack.pop();
      else return false;
  }
  return stack.length === 0;
};