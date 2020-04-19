import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import lowestCommonAncestor from "./lowestCommonAncestor.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0235. Lowest Common Ancestor of a Binary Search Tree", () => {
  {
    const arg1 = createBinaryTreeNode([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const arg2 = arg1!.left;
    const arg3 = arg1!.right;
    assertEquals(lowestCommonAncestor(arg1, arg2, arg3), arg1);
  }

  {
    const arg1 = createBinaryTreeNode([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    const arg2 = arg1!.left;
    const arg3 = arg1!.left!.right;
    assertEquals(lowestCommonAncestor(arg1, arg2, arg3), arg2);
  }
});
