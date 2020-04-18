export default function findRestaurant(
  list1: string[],
  list2: string[]
): string[] {
  const map = new Map<string, number>();

  for (const [i, name] of list1.entries()) {
    map.set(name, i);
  }

  let minSum = Infinity;
  let result: string[] = [];

  for (const [j, name] of list2.entries()) {
    const i = map.get(name) ?? Infinity;

    if (i + j < minSum) {
      result = [name];
      minSum = i + j;
    } else if (i + j === minSum) {
      result.push(name);
    }
  }

  return result;
}
