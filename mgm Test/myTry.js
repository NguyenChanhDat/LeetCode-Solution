function maxDiscount(amount, n, k, types, discounts, minSpends) {
  let orderTypeMap = new Map();
  for (let i = 0; i < n; i++) {
    orderTypeMap.set(minSpends[i].toString(), types[i]);
  }
  console.log(orderTypeMap);
  let orderDiscountMap = new Map();
  for (let i = 0; i < n; i++) {
    orderDiscountMap.set(minSpends[i].toString(), discounts[i]);
  }
  console.log(orderDiscountMap);

  let minSpends2 = minSpends.sort((a, b) => b - a);
  console.log(minSpends2);
  let profit = 0;
  let countCupon = 0;
  for (let i = 0; i < n; i++) {
    if (amount > minSpends2[i]) {
      if (orderTypeMap.get(minSpends2[i].toString()) == 1) {
        profit += orderDiscountMap.get(minSpends2[i].toString());
      } else {
        profit =
          amount * (orderDiscountMap.get(minSpends2[i].toString()) / 100);
      }
      countCupon++;
    }
    amount -= profit;

    if (countCupon == k) {
      break;
    }
  }
  return profit;
}
let types = [1, 1, 0];
let discounts = [2, 3, 40];
let minSpends = [9, 5, 12];
console.log(maxDiscount(10, 3, 2, types, discounts, minSpends));
