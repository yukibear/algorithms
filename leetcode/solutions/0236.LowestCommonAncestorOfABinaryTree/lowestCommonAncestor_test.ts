import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import lowestCommonAncestor from "./lowestCommonAncestor.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0236. Lowest Common Ancestor of a Binary Tree", () => {
  const TREE = createBinaryTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])!;

  assertEquals(lowestCommonAncestor(TREE, TREE!.left!, TREE.right!), TREE);
  assertEquals(
    lowestCommonAncestor(TREE, TREE!.left!, TREE.left!.right!.right!),
    TREE!.left!
  );
});
