export default function findJudge(N: number, trust: number[][]): number {
  if (trust.length === 0) {
    return 1
  }

  const trusted = new Map();
  const trusts = new Map();

  for (const [from, to] of trust) {
    trusted.set(to, (trusted.get(to) || new Set<number>()).add(from));
    trusts.set(from, (trusts.get(from) || new Set<number>()).add(to));
  }

  if (trusts.size === N) {
    return -1;
  }

  let townJudge = 0;

  for (let i = 1; i <= N; i++) {
    if (trusts.has(i) || !trusted.has(i) || trusted.get(i).size < N - 1) {
      continue;
    }

    if (townJudge) {
      return -1;
    }

    townJudge = i;
  }

  return townJudge === 0 ? -1 : townJudge;
}
