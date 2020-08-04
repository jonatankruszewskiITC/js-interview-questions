import { lengthNestedArray } from "../Exercises/05_LengthNestedArray";
describe("Length Nested Array", () => {
  test.each`
    a                             | expected
    ${[1, [2, 3]]}                | ${3}
    ${[1, [2, [3, 4]]]}           | ${4}
    ${[1, [2, [3, [4, [5, 6]]]]]} | ${6}
    ${[1, [2], 1, [2], 1]}        | ${5}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(lengthNestedArray(a)).toBe(expected);
  });
});
