function checkParenthesis(str) {
  const counter = { opened: 0, closed: 0 };
  for (let element of str) {
    if (element === "(") counter.opened++;
    else if (element === ")") counter.closed++;
    if (counter.closed > counter.opened) return "Invalid";
  }
  if (counter.opened === counter.closed) return 'Valid'
  return "Invalid";
}

export { checkParenthesis };
