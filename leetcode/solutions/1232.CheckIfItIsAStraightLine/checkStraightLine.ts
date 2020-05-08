export default function checkStraightLine(
  coordinates: [number, number][]
): boolean {
  if (coordinates.length < 2) {
    return false;
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x3, y3] = coordinates[i];

    if ((y3 - y1) / (x3 - x1) !== (y3 - y2) / (x3 - x2)) {
      return false;
    }
  }

  return true;
}
