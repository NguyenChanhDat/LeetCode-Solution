let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let key = 2;
function removeOccurenceElements(nums, val) {
  let spliceTime = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      spliceTime++;
    }
  }
  for (let i = 0; i < spliceTime; i++) {
    nums.push("X");
  }
}
removeOccurenceElements(arr, key);
console.log(arr);
