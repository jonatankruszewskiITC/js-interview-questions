import { findBrokenKeys } from "../Exercises/03_FindBrokenKeys";
describe("Find broken Keys", () => {
  test.each`
    a                   | b                   | expected
    ${"happy birthday"} | ${"hawwy birthday"} | ${["p"]}
    ${"starry night"}   | ${"starrq light"}   | ${["y", "n"]}
    ${"beethoven"}      | ${"affthoif5"}      | ${["b", "e", "v", "n"]}
  `("returns $expected when $a is called", ({ a, b, expected }) => {
    expect(findBrokenKeys(a, b)).toStrictEqual(expected);
  });
});
