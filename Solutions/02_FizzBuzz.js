function fizzBuzz(number) {
  const limits = { start: 1, end: number };
  let list = [];
  for (let i = limits.start; i <= limits.end; ++i) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        list.push("FizzBuzz");
      } else list.push("Fizz");
    } else if (i % 5 == 0) list.push("Buzz");
    else list.push(i);
  }
  return list;
}

export { fizzBuzz };
