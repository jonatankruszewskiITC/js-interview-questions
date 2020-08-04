import { checkParenthesis } from "../Exercises/06_CheckParenthesis";
describe("Check Parenthesis", () => {
  test.each`
    a               | expected
    ${"()"}         | ${"Valid"}
    ${"()()()(())"} | ${"Valid"}
    ${"()))()"}     | ${"Invalid"}
    ${"(()))())"}   | ${"Invalid"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(checkParenthesis(a)).toBe(expected);
  });
});
