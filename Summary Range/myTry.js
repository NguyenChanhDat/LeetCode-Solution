// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
let nums = [0, 1, 2, 4, 5, 7];
function summaryRange(nums) {
  let stringArrayResult = [];
  let firstPointer = 0,
    secondPointer = 1;
  while (secondPointer != nums.length) {
    if (nums[secondPointer] != nums[secondPointer - 1] + 1) {
      stringArrayResult.push(
        "" + nums[firstPointer] + "->" + nums[secondPointer - 1]
      );
      firstPointer = secondPointer;
    }
    console.log(secondPointer);
    secondPointer++;
  }
  console.log(secondPointer);
  if (firstPointer == nums.length - 1) {
    stringArrayResult.push("" + nums[nums.length - 1]);
  }
  return stringArrayResult;
}

let result = summaryRange(nums);
console.log(result);
