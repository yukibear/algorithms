export default function climbStairs(n: number): number {
  function func(n: number): number {
    if (!MEMO.has(n)) {
      MEMO.set(n, func(n - 1) + func(n - 2));
    }

    return MEMO.get(n)!;
  }

  return func(n);
}

const MEMO = new Map<number, number>([[1, 1], [2, 2]]);
