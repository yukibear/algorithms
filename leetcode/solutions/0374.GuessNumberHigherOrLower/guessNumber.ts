import { guess } from "./guessNumber_test.ts";

export default function guessNumber(n: number): number {
  let l = 1;
  let r = n;

  while (l <= r) {
    const mid = (l + r) >> 1;

    switch (guess(mid)) {
      case -1:
        r = mid - 1;
        break;
      case 1:
        l = mid + 1;
        break;
      default:
        return mid;
    }
  }

  return -1;
}
