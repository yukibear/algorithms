import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxDepth, { Node } from "./maxDepth.ts";

test("0559. Maximum Depth of N-ary Tree", () => {
  const node1: Node<number> = {
    val: 1,
    children: [
      {
        val: 3, children: [
        { val:5, children: [] },
        { val:6, children: [] },
      ] },
      { val: 2, children: [] },
      { val: 4, children: [] },
    ]
  }
  assertEquals(maxDepth(node1), 3);
});
