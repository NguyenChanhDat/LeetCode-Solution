let nums = [1, 0, 4, 1];
let k = 2;
function containsDuplicateII(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}
console.log(containsDuplicateII(nums, k));
