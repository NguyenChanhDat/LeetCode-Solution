// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

let arr1 = [1, 2, 5, 8];
let arr2 = [2, 3, 6];

function mergeSortArr(arr1, arr2, m, n) {
  for (let i = 0; i < arr2.length - 1; i++) {
    arr1.push(arr2[i]);
  }
  arr1.sort((a, b) => a - b);
}
mergeSortArr(arr1, arr2);
console.log(arr1);
