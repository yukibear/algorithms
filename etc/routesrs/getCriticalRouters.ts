type Point = number;

/**
 * @param {number[][]} routers
 * @return {number[]}
 */
export default function getCriticalRouters(
  routers: [number, number][]
): number[] {
  let points: Map<Point, Set<number>> = new Map();
  for (const [p1, p2] of routers) {
    if (!points.has(p1)) points.set(p1, new Set());
    if (!points.has(p2)) points.set(p2, new Set());
    points.get(p1)!.add(p2);
    points.get(p2)!.add(p1);
  }

  const dfs = (from: number, destination: number, visited: Set<number>) => {
    if (visited.has(from)) return false;
    visited.add(from);

    let point = points.get(from) || new Set<number>();
    if (point.has(destination)) return true;

    let reached = false;
    for (let next of point.values()) {
      let res = dfs(next, destination, visited);
      if (res) {
        reached = true;
        break;
      }
    }
    return reached;
  }

  let criticalPoints = new Set<number>();

  for (let from of points.keys()) {
    for (let to = from + 1; to < points.size; ++to) {
      for (let skip of points.keys()) {
        if (criticalPoints.has(skip)) continue;
        if (from === skip || to === skip) continue;
        if (points.get(skip)!.size <= 1) continue;

        if (!dfs(from, to, new Set<number>([skip]))) {
          criticalPoints.add(skip);
        }
      }
    }
  }

  return Array.from(criticalPoints.values());
}
