import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxDepth from "./maxDepth.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0104. Maximum Depth of Binary Tree", () => {
  assertEquals(
    maxDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])!),
    3
  );
});
