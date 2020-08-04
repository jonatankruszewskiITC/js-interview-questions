/*
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)
Examples
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

*/

function findBrokenKeys(str1, str2) {
  let brokenSet = new Set();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      brokenSet.add(str1[i]);
    }
  }
  return [...brokenSet];
}

export { findBrokenKeys };
