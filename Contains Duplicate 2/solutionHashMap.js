// Time Complexity : O(n)
// Space Complexity : O(n)
let nums = [1, 2, 3, 1];
let k = 3;
var containsNearbyDuplicate = function (nums, k) {
  const hasmap = new Map();
  console.log(hasmap + "  hasmap");
  for (let idx = 0; idx < nums.length; idx++) {
    // Check if the difference betweend duplicates is less than k
    if (idx - hasmap.get(nums[idx]) <= k) {
      return true;
    }
    hasmap.set(nums[idx], idx);
  }
  return false;
};
console.log(containsNearbyDuplicate(nums, k));
