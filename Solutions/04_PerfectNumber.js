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
