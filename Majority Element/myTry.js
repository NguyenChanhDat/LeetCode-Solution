// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Ex:Input: nums = [2,2,1,1,1,2,2]
// Output: 2
let nums = [2, 2, 1, 1, 1, 2, 2];
function majorityElement(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  nums.sort((a, b) => a - b);
  console.log(nums);
  let majorityNumber = Math.floor(nums.length / 2);
  let currentTemp = 1,
    finalTemp = 0;
  let i = 0;
  for (i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      currentTemp++;
      if (currentTemp > finalTemp) {
        finalTemp = currentTemp;
      }
    } else {
      currentTemp = 1;
    }
    if (finalTemp > majorityNumber) {
      return nums[i - 1];
    }
  }
}
console.log(majorityElement(nums));
