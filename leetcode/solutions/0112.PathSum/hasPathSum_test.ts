
import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasPathSum, { TreeNode } from "./hasPathSum.ts";

test("0112. Path Sum", () => {
  const testTreeNode: TreeNode = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: { val: 7 },
        right: { val: 2 },
      }
    },
    right: {
      val: 8,
      left: { val: 13 },
      right: {
        val: 4,
        right: { val: 1 },
      },
    },
  }
  assertEquals(hasPathSum(testTreeNode, 22), true);
});
