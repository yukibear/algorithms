import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ConvertArrayToTreeNode } from "./tools.ts";
import { TreeNode } from "../../data_structures/TreeNode.ts";

test("ConvertArrayToTreeNode", () => {
  let expected: TreeNode<number> = {
    val: -1,
    left: null,
    right: {
      val: -1,
      left: null,
      right: { val: -1, left: null, right: null }
    }
  };
  assertEquals(ConvertArrayToTreeNode([-1, null, -1, null, -1]), expected);

  expected = {
    val: -1,
    left: {
      val: -1,
      left: null,
      right: { val: -1, left: null, right: null }
    },
    right: {
      val: -1,
      left: null,
      right: null,
    }
  };
  assertEquals(ConvertArrayToTreeNode([-1, -1, -1, null, -1]), expected);
});
