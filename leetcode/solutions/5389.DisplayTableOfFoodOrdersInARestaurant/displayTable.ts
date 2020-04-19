export default function displayTable(orders: string[][]): string[][] {
  const tableMap = new Map<string, Map<string, number>>();
  const foodSet = new Set<string>();

  for (const [, num, food] of orders) {
    const foodCountMap = tableMap.get(num) || new Map<string, number>();
    foodCountMap.set(food, (foodCountMap.get(food) || 0) + 1);
    tableMap.set(num, foodCountMap);
    foodSet.add(food);
  }

  const title = ["Table", ...[...foodSet].sort()];
  const result: string[][] = [title];
  const keys = [...tableMap.keys()].sort((a, b) => Number(a) - Number(b));

  for (const key of keys) {
    const tmp = new Array(title.length);
    tmp[0] = key;
    const foodCountMap = tableMap.get(key) || new Map<string, number>();

    for (let i = 1; i < title.length; i++) {
      tmp[i] = (foodCountMap.get(title[i]) || 0).toString();
    }

    result.push(tmp);
  }

  return result;
}
