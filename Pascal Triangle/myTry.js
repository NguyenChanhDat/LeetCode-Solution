let nums = 5;
function pascalTriangle(numRows) {
  if (numRows == 0) {
    return [];
  }
  if (numRows == 1) {
    return [[1]];
  }
  prevArray = pascalTriangle(numRows - 1);
  newArray = new Array(numRows).fill(1);
  for (let i = 1; i < numRows - 1; i++) {
    newArray[i] = prevArray[numRows - 2][i - 1] + prevArray[numRows - 2][i];
  }
  prevArray.push(newArray);
  return prevArray;
}

console.log(pascalTriangle(nums));
