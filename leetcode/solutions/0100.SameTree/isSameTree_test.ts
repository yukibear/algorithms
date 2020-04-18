import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSameTree from "./isSameTree.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0100. Same Tree", () => {
  assertEquals(
    isSameTree(
      createBinaryTreeNode([1, 2, 3]),
      createBinaryTreeNode([1, 2, 3])
    ),
    true
  );

  assertEquals(
    isSameTree(
      createBinaryTreeNode([1, 2]),
      createBinaryTreeNode<number>([1, null, 2])
    ),
    false
  );
});
