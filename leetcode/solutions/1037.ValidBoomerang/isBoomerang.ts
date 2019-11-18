/**
 * @param {number[][]} points
 * @return {boolean}
 */
export default function isBoomerang(
  p: [[number, number], [number, number], [number, number]],
): boolean {
  return (p[0][0] - p[1][0]) * (p[0][1] - p[2][1]) != (p[0][0] - p[2][0]) * (p[0][1] - p[1][1])
}
