// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Ex:Input: nums = [2,2,1,1,1,2,2]
// Output: 2
let nums = [2, 2, 1, 1, 1, 2, 2];
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  let majorityNumber = Math.floor(nums.length / 2);
  return nums[majorityNumber];    
}
console.log(majorityElement(nums));
