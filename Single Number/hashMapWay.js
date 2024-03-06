let nums = [1, 2, 1, 2, 3, 4, 3];
var singleNumber = function (nums) {
  const map = {};

  for (const i in nums) {
    if (map[nums[i]] === 1) map[nums[i]]--;
    else map[nums[i]] = 1;
  }
  console.log(map);
  for (const k in map) {
    if (map[k] === 1) return k;
  }
};
console.log(singleNumber(nums));
