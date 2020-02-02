export default function kWeakestRows(mat: number[][], k: number): number[] {
  const soldirCountMap = new Map<number, number[]>();

  for (const [i, row] of mat.entries()) {
    const count = row.reduce((p, n) => p + n);
    const counts = soldirCountMap.get(count) || [];
    counts.push(i);
    soldirCountMap.set(count, counts);
  }

  const sortedSoldirCuonts = [...soldirCountMap.entries()].sort(
    ([a], [b]) => a - b
  );
  const res: number[] = [];

  for (const [, indices] of sortedSoldirCuonts) {
    indices.sort((a, b) => a - b);

    for (const i of indices) {
      res.push(i);

      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
}
