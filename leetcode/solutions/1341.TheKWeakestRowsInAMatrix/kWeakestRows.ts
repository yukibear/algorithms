export default function kWeakestRows(mat: number[][], k: number): number[] {
  const map = new Map<number, number[]>();
  mat.map((arr, i) => {
    const count = arr.filter(n => n === 1).length;
    const a = map.get(count) || [];
    a.push(i);
    map.set(count, a);
  });

  const mapKeys = [...map.keys()].sort((a, b) => a - b);
  const res: number[] = [];

  for (const key of mapKeys) {
    const ke = map.get(key)!.sort((a, b) => a - b);
    for (const i of ke) {
      res.push(i);
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
}
