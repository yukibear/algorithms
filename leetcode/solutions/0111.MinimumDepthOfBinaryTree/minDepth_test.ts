import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minDepth from "./minDepth.ts";

test("0111. Minimum Depth of Binary Tree", () => {
  const tree1 = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    }
  }
  assertEquals(minDepth(tree1), 2);

  const tree2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  }
  assertEquals(minDepth(tree2), 2);
});
