export default function maxProfit(
  prices: number[]
): number {
  if (prices.length <= 1) {
    return 0;
  }

  let min = prices[0];
  let max = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      max = prices[i];
      continue;
    }

    profit += max - min;
    min = prices[i];
    max = prices[i];
  }

  profit += max - min;

  return profit;
}
