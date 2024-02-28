// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

let digits = [9];
function plusOne(digits) {
  let remember = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (remember == 1) {
      remember--;
      if (digits[i] == 9) {
        digits[i] = 0;
        remember++;
      } else {
        digits[i]++;
      }
    }
  }
  let leftArr = [];
  if (remember == 1 && digits[0] == 0) {
    digits[0] = 0;
    leftArr.push(1);
    let result = leftArr.concat(digits);
    return result;
  } else {
    return digits;
  }
}
let finalResult = plusOne(digits);
console.log(finalResult);
