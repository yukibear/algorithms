import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import leafSimilar from "./leafSimilar.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0872. Leaf-Similar Trees", () => {
  assertEquals(
    leafSimilar(
      createBinaryTreeNode([1, 2, 3]),
      createBinaryTreeNode([1, 2, 4, null, null, 3])
    ),
    true
  );
});
