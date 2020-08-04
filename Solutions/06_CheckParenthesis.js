/*
Write a function, that given any string composed only by parenthesis, it will return 'Valid' or 'Invalid' if the parenthesis are located properly.
    ()          ➞ Valid
    ()()()(())  ➞ Valid
    ()))()      ➞ Invalid
    (()))())    ➞ Invalid
    
*/

function checkParenthesis(str) {
  const counter = { opened: 0, closed: 0 };
  for (let element of str) {
    if (element === "(") counter.opened++;
    else if (element === ")") counter.closed++;
    if (counter.closed > counter.opened) return "Invalid";
  }
  return "Valid";
}

export { checkParenthesis };
