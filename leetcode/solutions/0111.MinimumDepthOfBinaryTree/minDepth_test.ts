import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minDepth from "./minDepth.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0111. Minimum Depth of Binary Tree", () => {
  assertEquals(
    minDepth(createBinaryTreeNode([3, 9, 20, null, null, 15, 7])),
    2
  );
  assertEquals(minDepth(createBinaryTreeNode([1, 2])), 2);
});
