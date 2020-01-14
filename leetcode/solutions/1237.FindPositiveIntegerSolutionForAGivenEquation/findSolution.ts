interface CustomFunction {
  f: (x: number, y: number) => number;
}

export default function findSolution(
  customfunction: CustomFunction,
  z: number
): [number, number][] {
  const func = customfunction.f;
  const result: [number, number][] = [];
  let x = 1;
  let y = 1000;

  while (x <= 1000 && y > 0) {
    const res = func(x, y);

    if (res > z) {
      y--;
    } else if (res < z) {
      x++;
    } else {
      result.push([x, y]);
      x++;
      y--;
    }
  }

  return result;
}
