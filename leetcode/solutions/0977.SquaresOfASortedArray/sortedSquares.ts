export default function sortedSquares(A: number[]): number[] {
  return A.map(n => n * n).sort((a, b) => a - b);
}
