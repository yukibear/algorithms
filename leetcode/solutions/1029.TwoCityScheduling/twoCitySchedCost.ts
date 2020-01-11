export default function twoCitySchedCost(costs: number[][]): number {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

  const half = costs.length / 2;
  let sum = 0;

  for (let i = 0; i < half; i++) {
    sum += costs[i][0] + costs[i + half][1];
  }

  return sum;
}
