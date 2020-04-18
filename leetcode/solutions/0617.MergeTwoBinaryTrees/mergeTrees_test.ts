import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mergeTrees from "./mergeTrees.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0617. Merge Two Binary Trees", () => {
  assertEquals(
    mergeTrees(
      createBinaryTreeNode([1, 3, 2, 5])!,
      createBinaryTreeNode([2, 1, 3, null, 4, null, 7])!
    ),
    createBinaryTreeNode([3, 4, 5, 5, 4, null, 7])!
  );
});
