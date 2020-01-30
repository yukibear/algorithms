export default function findJudge(N: number, trust: number[][]): number {
  const count = Array.from({ length: N + 1 }, () => 0);

  for (const [from, to] of trust) {
    count[from]--;
    count[to]++;
  }

  for (let i = 1; i < count.length; i++) {
    if (count[i] === N - 1) {
      return i;
    }
  }

  return -1;
}
