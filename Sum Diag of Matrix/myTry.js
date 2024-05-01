// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let n = 3;
function calSum(arr, n) {
  let priDiag = 0;
  let secDiag = 0;
  for (let i = 0; i < n; i++) {
    priDiag += arr[i][i];
  }
  let mid = Math.floor(n / 2);
  //   console.log(mid + " mid");
  if (n % 2 == 0) {
    for (let i = n - 1; i >= mid; i--) {
      //   console.log(arr[n - 1 - i][i] + " arr[" + (n - i) + "]" + "[" + i + "]");
      //   console.log(arr[i][n - 1 - i] + " arr[" + i + "]" + "[" + (n - i) + "]");
      secDiag += arr[n - 1 - i][i] + arr[i][n - 1 - i];
    }
  } else {
    for (let i = n - 1; i > mid; i--) {
      //   console.log(arr[n - 1 - i][i] + " arr[" + (n - i) + "]" + "[" + i + "]");
      //   console.log(arr[i][n - 1 - i] + " arr[" + i + "]" + "[" + (n - i) + "]");
      secDiag += arr[n - 1 - i][i] + arr[i][n - 1 - i];
    }
    secDiag += arr[mid][mid];
  }
  //   console.log(secDiag + " secDiag");
  //   console.log(priDiag + " priDiag");
  let result = Math.abs(priDiag - secDiag);
  return result;
}
console.log(calSum(arr, n));
