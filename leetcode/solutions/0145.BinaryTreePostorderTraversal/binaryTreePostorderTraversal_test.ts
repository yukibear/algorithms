import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import postorderTraversal from "./postorderTraversal.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0145. Binary Tree Postorder Traversal", () => {
  assertEquals(
    postorderTraversal(createBinaryTreeNode([1, null, 2, 3])),
    [3, 2, 1]
  );
});
