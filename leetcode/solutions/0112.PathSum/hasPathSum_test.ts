
import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasPathSum from "./hasPathSum.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0112. Path Sum", () => {
  assertEquals(hasPathSum(
    createBinaryTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
    22
  ), true);
  assertEquals(hasPathSum(
    createBinaryTreeNode([1]),
    1
  ), true);
});
