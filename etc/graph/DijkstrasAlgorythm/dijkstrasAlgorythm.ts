import nextGreatestLetter from "../../../leetcode/solutions/0744.FindSmallestLetterGreaterThanTarget/nextGreatestLetter.ts";

export default function dijkstrasAlgorythm(
  graph: number[][],
  start: number,
  goal: number
): number[] {
  // const routes = new Map<number, number[][]>();

  // for (const [from, to, weight] of graph) {
  //   const route1 = routes.get(from) || [];
  //   route1.push([to, weight]);
  //   routes.set(from, route1);

  //   const route2 = routes.get(to) || [];
  //   route2.push([from, weight]);
  //   routes.set(to, route2);
  // }

  // // e.x. [5, [0, 3, 5]]  0 -> 3 -> 5
  // const fixedRoutes = new Map<number, number[]>([[start, [start]]]);
  // type WeightedRoute  = [
  //   // weight
  //   number,
  //   // route: [last index, route]
  //   [number, number[]],
  // ]
  // const unfixedRoutes = new Map<number, WeightedRoute>();
  // for (const [next, weight] of routes.get(start) || []) {
  //   [routes.get(start) || []]
  //   const currentWeight = hogeMap.get(start);
  //   const nextWeight = fugaMap.get(next);

  //   if (nextWeight > currentWeight + weight) {
  //     nextWeight = currentWeight + weight;
  //   }

  //   unfixedRoutes.set(0, [start, routes.get(start)?.map(([i]) => i)]);
  // }

  // const map = new Map<number, number[][]>();
  // map.set(start, routes.get(start) || []);

  // while (true) {
  //   // chose minimum weight list to fix
  //   const i = [...unfixedRoutes.keys()].sort((a, b) => a - b)[0];

  //   for (const [next, weight] of routes.get(start) || []) {
  //     unfixedRoutes
  //   }

  //   const neighbours: number[][] = map.get(i) || [];
  //   // map.delete(i);

  //   for (const [next, weight] of neighbours) {
  //     if (fixedRoutes.has(next)) {
  //       continue;
  //     }
  //   }
  //   if (nextWeight > currentWeight + weight) {
  //     nextWeight = currentWeight + weight;
  //     map.set(next, nextWeight);
  //   }
  // }

  return [];
}
