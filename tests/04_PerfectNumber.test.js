

import { perfectnumber } from "../Exercises/04_PerfectNumber";
describe("Perfect Number", () => {
  test.each`
    a       | expected
    ${6}    | ${`Perfect`}
    ${12}   | ${2}
    ${18}   | ${`Neither`}
    ${496}  | ${`Perfect`}
    ${138}  | ${6}
    ${612}  | ${`Neither`}
    ${1876} | ${28}
    ${5456} | ${496}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(perfectnumber(a)).toBe(expected);
  });
});
