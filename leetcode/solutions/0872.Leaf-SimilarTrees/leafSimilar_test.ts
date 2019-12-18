import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import leafSimilar from "./leafSimilar.ts";
import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0872. Leaf-Similar Trees", () => {
  const tree1: BinaryTreeNode<number> = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  const tree2: BinaryTreeNode<number> = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: null,
    }
  }
  assertEquals(leafSimilar(tree1, tree2), true);
});
