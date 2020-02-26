import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import longestUnivaluePath from "./longestUnivaluePath.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

Deno.test("0687. Longest Univalue Path", () => {
  assertEquals(
    longestUnivaluePath(createBinaryTreeNode([5, 4, 5, 1, 1, null, 5])),
    2
  );
  assertEquals(
    longestUnivaluePath(createBinaryTreeNode([1, 4, 5, 4, 4, null, 5])),
    2
  );
  assertEquals(longestUnivaluePath(createBinaryTreeNode([1])), 0);
});
