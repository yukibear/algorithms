import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sortedArrayToBST from "./sortedArrayToBST.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0108. Convert Sorted Array to Binary Search Tree", () => {
  assertEquals(
    sortedArrayToBST([-10, -3, 0, 5, 9]),
    createBinaryTreeNode([0, -3, 9, -10, null, 5])
  );
});
