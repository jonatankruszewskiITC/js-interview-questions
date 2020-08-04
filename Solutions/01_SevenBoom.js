function sevenBoom(numArray) {
  for (let element of numArray) {
    if (element.toString().indexOf("7") > -1) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

export { sevenBoom };
