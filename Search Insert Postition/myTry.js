// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

let nums = [1, 3, 5, 6];
let target = 5;
function takeAction(nums, target) {
  function binarySearch(head, tail, target, array) {
    if (head > tail) {
      return head;
    }
    let mid = Math.floor((head + tail) / 2);
    if (array[mid] == target) {
      return mid;
    } else if (target > array[mid]) {
      return binarySearch(mid + 1, array.length - 1, target, array);
    } else {
      return binarySearch(head, mid - 1, target, array);
    }
  }
  return binarySearch(0, nums.length - 1, target, nums);
}
let result = takeAction(nums, target);
console.log(result);
