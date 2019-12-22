export default function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {

  let sumOfCandies = 0;
  const boxMap = new Map<number, boolean>();
  const keySet = new Set<number>();
  status.forEach((s, i) => s === 1 ? keySet.add(i) : '');

  function openBox(i: number) {
    if (boxMap.get(i)) {
      return;
    }

    keySet.delete(i);
    boxMap.set(i, true);
    sumOfCandies += candies[i];
    candies[i] = 0;

    keys[i].forEach(boxIndex => {
      keySet.add(boxIndex);

      if (boxMap.has(boxIndex)) {
        openBox(boxIndex);
      }
    });

    containedBoxes[i].forEach(boxIndex => {
      if (keySet.has(boxIndex)) {
        openBox(boxIndex);
      } else {
        boxMap.set(boxIndex, false);
      }
    });
  }

  initialBoxes.forEach(openBox);

  return sumOfCandies;
}

function maxCandies1(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  if (initialBoxes.length === 0) {
    return 0;
  }

  let sumOfCandies = 0;
  const boxSet = new Set<number>();
  const keySet = new Set<number>();
  status.forEach((s, i) => s ? keySet.add(i) : '');

  function openBox(i: number) {
    keySet.delete(i);
    sumOfCandies += candies[i];
    keys[i].forEach(k => keySet.add(k));
    containedBoxes[i].forEach(boxIndex => boxSet.add(boxIndex));
  }

  function func(startIndex: number) {
    openBox(startIndex);

    for (const i of keySet.values()) {
      if (boxSet.has(i)) {
        func(i);
      }
    }
  }

  initialBoxes.forEach(boxIndex => {
    func(boxIndex);
  });

  return sumOfCandies;
}
