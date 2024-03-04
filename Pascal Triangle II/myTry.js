let rowIndex = 3;
function pascalTriangleII(rowIndex) {
  let twoDArray = [[]];
  for (let i = 0; i < rowIndex + 1; i++) {
    if (i == 0) {
      twoDArray[i] = [1];
    }
    if (i == 1) {
      twoDArray[i] = [1, 1];
    }
    twoDArray[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      twoDArray[i][j] = twoDArray[i - 1][j - 1] + twoDArray[i - 1][j];
    }
  }
  return twoDArray[rowIndex];
}
let resultArray = pascalTriangleII(rowIndex);
console.log(resultArray);
