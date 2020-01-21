import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isBalanced from "./isBalanced.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0110. Balanced Binary Tree", () => {
  assertEquals(
    isBalanced(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])),
    true
  );
  assertEquals(
    isBalanced(createBinaryTreeNode([1, 2, 2, 3, 3, null, null, 4, 4])),
    false
  );
  assertEquals(isBalanced(null), true);
  assertEquals(isBalanced(createBinaryTreeNode([1])), true);
  assertEquals(isBalanced(createBinaryTreeNode([1, 2])), true);
});
