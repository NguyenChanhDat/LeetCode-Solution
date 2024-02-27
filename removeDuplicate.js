let nums = [1, 1];

function removeDuplicate(nums) {
  let key = nums[0];
  let keyNum = 0;
  let xNum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (key == nums[i]) {
      nums.splice(i, 1);
      xNum++;
    } else {
      key = nums[i];
      keyNum++;
    }
  }
  for (let i = 0; i < xNum; i++) {
    nums.push("X");
  }
  return keyNum;
}

let result = removeDuplicate(nums);
console.log(nums);
