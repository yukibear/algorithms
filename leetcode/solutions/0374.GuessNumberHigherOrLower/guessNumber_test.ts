import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import guessNumber from "./guessNumber.ts";

let answer = -1;

export function guess(num: number): number {
  if (answer < num) {
    return -1;
  } else if (answer > num) {
    return 1;
  }

  return 0;
}

Deno.test("0374. Guess Number Higher or Lower", () => {
  answer = 6;
  assertEquals(guessNumber(10), 6);

  answer = 1;
  assertEquals(guessNumber(10), 1);

  const ans = 100;
  answer = ans;
  assertEquals(guessNumber(100), ans);
});
