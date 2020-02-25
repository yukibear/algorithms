import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import preorder, { Node } from "./preorder.ts";

Deno.test("0589. N-ary Tree Preorder Traversal", () => {
  const node: Node = {
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] }
        ]
      },
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
  };
  assertEquals(preorder(node), [1, 3, 5, 6, 2, 4]);
});
