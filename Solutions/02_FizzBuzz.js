/*
Write a program that receives a numbere, and returns an numbers from 1 to that number.
For example, given number '5' should return [1,2,3,4,5].
But for multiples of three replace with “Fizz” instead of the number and for the multiples of five replace with “Buzz”.
For numbers which are multiples of both three and five replace “FizzBuzz”.
*/
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
