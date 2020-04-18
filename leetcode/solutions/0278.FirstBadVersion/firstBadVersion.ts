export type IsBadVersion = (n: number) => boolean;
export type FindFirstBadVirsion = (n: number) => number;

export default function solution(
  isBadVersion: IsBadVersion
): FindFirstBadVirsion {
  return function(n: number): number {
    let l = 1;
    let r = n;

    while (l < r) {
      const mid = (l + r) >>> 1;

      if (isBadVersion(mid)) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    return l;
  };
}
