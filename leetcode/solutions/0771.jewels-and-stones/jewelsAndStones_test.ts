import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";
import jewelsAndStones from './jewelsAndStones.ts';

test("0771. Jewels and Stones", () => {
    assertStrictEq(jewelsAndStones("aA", "aAAbbbb"), 3);
    assertStrictEq(jewelsAndStones("z", "ZZ"), 0);
  });