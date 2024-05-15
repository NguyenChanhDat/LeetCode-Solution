let nums = [8, 2, 5, 1, 7, 9, 3, 4];
function mergeSort(nums) {
  if (nums.length <= 1) {
    return;
  }
  let mid = Math.floor(nums.length / 2);
  let leftArr = nums.slice(0, mid);
  let rightArr = nums.slice(mid);
  console.log(leftArr + ' leftArr');
  console.log(rightArr + ' rightArr');
  mergeSort(leftArr);
  mergeSort(rightArr);
  return merge(leftArr, rightArr, nums);
}
function merge(leftArr, rightArr, nums) {
  let leftI = 0;
  let rightI = 0;
  let i = 0;
  while (leftI < leftArr.length && rightI < rightArr.length) {
    if (leftArr[leftI] < rightArr[rightI]) {
      nums[i] = leftArr[leftI];
      leftI++;
      i++;
    } else {
      nums[i] = rightArr[rightI];
      rightI++;
      i++;
    }
  }
  while (leftI < leftArr.length) {
    nums[i] = leftArr[leftI];
    leftI++;
    i++;
  }
  while (rightI < rightArr.length) {
    nums[i] = rightArr[rightI];
    rightI++;
    i++;
  }
  return nums;
}

console.log(mergeSort(nums));
