import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reverse from "./reverse.ts";

test("0007. Reverse Integer", () => {
  assertEquals(reverse(123), 321);
  assertEquals(reverse(-123), -321);
  assertEquals(reverse(120), 21);
  assertEquals(reverse(1534236469), 0);
  assertEquals(reverse(-2147483412), -2143847412);
});
