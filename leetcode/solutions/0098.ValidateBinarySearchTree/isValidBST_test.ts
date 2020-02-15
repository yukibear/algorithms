import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isValidBST from "./isValidBST.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0098. Validate Binary Search Tree", () => {
  // assertEquals(isValidBST(createBinaryTreeNode([2, 1, 3]))!, true);
  // assertEquals(isValidBST(createBinaryTreeNode([5, 1, 4, null, null, 3, 6]))!, false);
  // assertEquals(isValidBST(createBinaryTreeNode([10, 5, 15, null, null, 6, 20]))!, false);
  assertEquals(
    isValidBST(
      createBinaryTreeNode([3, 1, 5, 0, 2, 4, 6, null, null, null, 3])
    )!,
    false
  );
});
