/*
Create a function that takes an array of numbers and return "Boom!"
if the number 7 appears in the array.
Otherwise, return "there is no 7 in the array".
*/

function sevenBoom(numArray) {
  for (let element of numArray) {
    if (element.toString().indexOf("7") > -1) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

export { sevenBoom };
