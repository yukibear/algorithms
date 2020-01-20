import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import firstBadVersion, { IsBadVersion, FindFirstBadVirsion } from "./firstBadVersion.ts";

test("0278. First Bad Version", () => {
  const LAST_VERSION = 10;
  const FIRST_BAD_VERSION_1 = 3;
  const isBadVersion1: IsBadVersion = (n: number) => {
    return n < FIRST_BAD_VERSION_1 ? false : true;
  }
  const findFirstBadVirsion1: FindFirstBadVirsion = firstBadVersion(isBadVersion1);

  assertEquals(
    findFirstBadVirsion1(LAST_VERSION),
    FIRST_BAD_VERSION_1
  );
});
