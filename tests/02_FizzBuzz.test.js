import { fizzBuzz } from "../Exercises/02_FizzBuzz";
describe("Fizz Buzz", () => {
  test.each`
    a     | expected
    ${3}  | ${[1, 2, "Fizz"]}
    ${5}  | ${[1, 2, "Fizz", 4, "Buzz"]}
    ${15} | ${[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(fizzBuzz(a)).toStrictEqual(expected);
  });
});
