import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import searchBST from "./searchBST.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0700. Search in a Binary Search Tree", () => {
  assertEquals(
    searchBST(createBinaryTreeNode([4, 2, 7, 1, 3]), 2),
    createBinaryTreeNode([2, 1, 3])
  );
});
