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


var isValid = function(s) {
  let parens = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
      let curr = s[i];

      if (parens.hasOwnProperty(curr)) {
          stack.push(curr);
          continue;
      }

      let top = stack.pop();
      if (parens[top] !== curr) {
          return false;
      }
  }

  return stack.length === 0;
};