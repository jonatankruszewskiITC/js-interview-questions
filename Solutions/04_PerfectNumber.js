/*
A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

6 = 1 + 2 + 3
A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

12 = 1 - 2 + 3 + 4 + 6
Create a function that takes a number n as input.

If n is perfect, return "Perfect".
If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
If n is neither perfect nor admirable, return "Neither".

Examples
admirable(6) ➞ "Perfect"

admirable(12) ➞ 2

admirable(18) ➞ "Neither"

*/
function perfectnumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    Number.isInteger(n / i) ? (sum += i) : sum;
  }
  if (sum - n == 0) return "Perfect";
  if (sum - n > 0) {
    let ngtv = (sum - n) / 2;
    return Number.isInteger(ngtv) && Number.isInteger(n / ngtv)
      ? ngtv
      : "Neither";
  }
  if (sum - n < 0) return "Neither";
}

export { perfectnumber };
