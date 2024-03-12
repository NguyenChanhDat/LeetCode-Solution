// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
let nums = [1, 2, 3, 1, 2, 3],
  k = 2;
function containsDuplicateII(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + k + 1]) {
      return true;
    } else if (nums[i] == nums[i - k - 1]) {
      return true;
    }
  }
  return false;
}
console.log(containsDuplicateII(nums, k));

