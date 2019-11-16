import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import binaryTreePaths from "./binaryTreePaths.ts";
import TreeNode from "../../../data_structures/TreeNode.ts";

test("0257. Binary Tree Paths", () => {
  const testTreeNode: TreeNode = {
    val: 1,
    left: {
      val: 2,
      right: { val: 5 },
    },
    right: { val: 3 },
  }
  assertEquals(binaryTreePaths(testTreeNode), ["1->2->5", "1->3"]);
});
