// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
let nums = [0, 1];
function check(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (i != nums[i]) {
      return i;
    }
  }
}
console.log(check(nums));
