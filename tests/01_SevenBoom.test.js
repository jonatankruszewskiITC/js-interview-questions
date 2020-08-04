import { sevenBoom } from "../Exercises/01_SevenBoom";
describe("Seven Boom", () => {
  test.each`
    a                        | expected
    ${[1, 2, 3, 4, 5, 6, 7]} | ${`Boom!`}
    ${[8, 6, 33, 100]}       | ${`there is no 7 in the array`}
    ${[2, 55, 60, 97, 86]}   | ${`Boom!`}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(sevenBoom(a)).toBe(expected);
  });
});
