import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import binaryTreePaths from "./binaryTreePaths.ts";
import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0257. Binary Tree Paths", () => {
  const testTreeNode: BinaryTreeNode<number> = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  }
  assertEquals(binaryTreePaths(testTreeNode), ["1->2->5", "1->3"]);
  assertEquals(binaryTreePaths(null), []);
  assertEquals(binaryTreePaths({ val: 1, left: null, right: null }), ["1"]);
});
