let nums = [1, 2, 3, 4, 5];

function containsDuplicateII(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - map.get(nums[i]) == 0) {
      return true;
    }
    map.set(nums[i], nums[i]);
    // console.log("key: " + nums[i] + ", value: " + nums[i]);
  }
  return false;
}
console.log(containsDuplicateII(nums));
