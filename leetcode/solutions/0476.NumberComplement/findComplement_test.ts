import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findComplement from "./findComplement.ts";

Deno.test("0476. Number Complement", () => {
  assertEquals(findComplement(5), 2);
  assertEquals(findComplement(1), 0);
});
