function lengthNestedArray(arr) {
  let count = 0;
  arr.forEach((item) => {
    if (Array.isArray(item)) count += lengthNestedArray(item);
    else count++;
  });
  return count;
}

export { lengthNestedArray };
