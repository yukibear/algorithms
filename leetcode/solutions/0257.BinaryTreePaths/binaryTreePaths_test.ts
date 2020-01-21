import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import binaryTreePaths from "./binaryTreePaths.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0257. Binary Tree Paths", () => {
  assertEquals(binaryTreePaths(createBinaryTreeNode([1, 2, 3, null, 5])), [
    "1->2->5",
    "1->3"
  ]);
  assertEquals(binaryTreePaths(null), []);
  assertEquals(binaryTreePaths(createBinaryTreeNode([1])), ["1"]);
});
