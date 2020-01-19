export default function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[]
): number {
  const gotKeys = new Set<number>();
  const gotBoxes = new Set<number>();
  status.forEach((v, i) => (v === 1) ? gotKeys.add(i) : "");

  let candyCount = 0;

  function openBox(i: number) {
    candyCount += candies[i];

    keys[i].forEach(i => {
      if (gotBoxes.has(i)) {
        openBox(i);
        return;
      }
      gotKeys.add(i)
    });

    containedBoxes[i].forEach(i => {
      if (gotKeys.has(i)) {
        openBox(i);
        return;
      }

      gotBoxes.add(i);
    });
  }

  initialBoxes.forEach(openBox);

  return candyCount;
}
