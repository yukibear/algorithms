import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import longestUnivaluePath, { TreeNode } from "./longestUnivaluePath.ts";

test("0687. Longest Univalue Path", () => {
  const testNode1: TreeNode = {
    val: 5,
    left: {
      val: 4,
      left: { val: 1 },
      right: { val: 1 },
    },
    right: {
      val: 5,
      left: undefined,
      right: { val: 5 },
    },
  }
  assertEquals(longestUnivaluePath(testNode1), 2);

  const testNode2: TreeNode = {
    val: 1,
    left: {
      val: 4,
      left: { val: 4 },
      right: { val: 4 },
    },
    right: {
      val: 5,
      left: undefined,
      right: { val: 5 },
    },
  }
  assertEquals(longestUnivaluePath(testNode2), 2);
});
