// Sample Input
// saveChangesInTheEditor
// Sample Output
// 5
// Explanation
// String  contains five words:
// save
// Changes
// In
// The
// Editor

let string = "oneTwoThree";
// let stringTest = "Xount";
// console.log(stringTest.charCodeAt(0));
function camel(string) {
  let result = 1;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) < 97) {
      result++;
    }
  }
  return result;
}
console.log(camel(string));
