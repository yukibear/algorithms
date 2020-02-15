import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import levelOrder from "./levelOrder.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0102. Binary Tree Level Order Traversal", () => {
  assertEquals(
    levelOrder(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])!),
    [[3], [9, 20], [15, 7]]
  );
});
