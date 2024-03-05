// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// This solution takes less time complexity than myTry.js

let prices = [7, 6, 2, 8, 1, 4];
function buySellStock(prices) {
  let finalProfit = 0;
  let currentProfit = 0;
  let buy = 0,
    sell = 1;
  while (sell < prices.length) {
    currentProfit = prices[sell] - prices[buy];
    if (currentProfit < 0) {
      buy = sell;
      sell++;
    } else {
      if (currentProfit > finalProfit) {
        finalProfit = currentProfit;
        sell++;
      } else {
        sell++;
      }
    }
  }

  return finalProfit;
}
let result = buySellStock(prices);
console.log(result);
