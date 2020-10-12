export default function findMinArrowShots(points: number[][]): number {
  if (points.length <= 1) {
    return points.length;
  }

  points.sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
  let arrow = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrow++;
      end = points[i][1];
    } else {
      end = Math.min(end, points[i][1]);
    }
  }

  return arrow;
}

function findMinArrowShots1(points: number[][]): number {
  points.sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0]);
  let count = 0;

  for (let i = 0; i < points.length;) {
    count++;

    if (i === points.length - 1 || points[i][1] < points[i + 1][0]) {
      i++;
      continue
    }

    let arrow = points[i][1];

    while (arrow > points[i + 1][1]) {
      arrow--;
    }

    while (i < points.length && arrow >= points[i][0] && arrow <= points[i][1]) {
      i++;
    }
  }

  return count;
}

