export default function climbStairs(n: number): number {

  function func(n: number): number {
    if (MEMO.has(n)) {
      return MEMO.get(n)!;
    }

    const res = func(n - 1) + func(n - 2);
    MEMO.set(n, res);

    return res;
  }

  return func(n);
}

const MEMO = new Map<number, number>([[1, 1], [2, 2]]);

