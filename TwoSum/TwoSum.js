let arr = [3, 2, 4];
let target = 6;
function takeAction(nums, target) {
  let arrayResult = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let numLeft = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == numLeft) {
        arrayResult.push(i);
        arrayResult.push(j);
      }
    }
  }
  return arrayResult;
}
let result = takeAction(arr, target);
console.log(result);
