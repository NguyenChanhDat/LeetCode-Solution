// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
let nums = [3, 3, 1, 2, 5, 1, 2];
var singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx];
  }
  return uniqNum; // Return the unique number...
};
console.log(singleNumber(nums));
