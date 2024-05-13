function returnArray() {
  let arr = [];
  let totalProduction = 1;
  for (let i = 0; i < nums.length; i++) {
    totalProduction *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    arr.push(totalProduction / nums[i]);
  }
  return arr;
}

//THe only problem's gonna happen if there is 0 in the initial array
//Ex: arr=[1,0,3,4]=>[0, NaN, 0, 0]
