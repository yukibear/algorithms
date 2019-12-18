import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import leafSimilar from "./leafSimilar.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0872. Leaf-Similar Trees", () => {
  assertEquals(
    leafSimilar(
      createBinaryTreeNode([1, 2, 3]),
      createBinaryTreeNode([1, 2, 4, null, null, 3])
    ),
    true
  );
});
