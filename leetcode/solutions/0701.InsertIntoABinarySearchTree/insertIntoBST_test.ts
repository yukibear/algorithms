import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import insertIntoBST from "./insertIntoBST.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0701. Insert into a Binary Search Tree", () => {
  assertEquals(
    insertIntoBST(createBinaryTreeNode([4, 2, 7, 1, 3]), 5),
    createBinaryTreeNode([4, 2, 7, 1, 3, 5])
  );
});
