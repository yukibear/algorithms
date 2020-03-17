export default function heightChecker(heights: number[]): number {
  return [...heights].sort((a, b) => a - b).filter((v, i) => v !== heights[i])
    .length;
}
