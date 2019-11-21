import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { TreeNode } from '../../data_structures/TreeNode.ts';
import {
  StringArrayToTreeNode,
} from './tools.ts';

test("StringArrayToTreeNode", () => {
  let expectedTreeNode: TreeNode = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  }
  assertEquals(stringArrayToNode([1,null,2]), expectedTreeNode);

  expectedTreeNode = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null }
  }
  assertEquals(stringArrayToNode([1,2,3,4,5]), expectedTreeNode);

  expectedTreeNode = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: { val: 4, left: null, right: null },
      },
      right: null,
    }
  }
  // assertEquals(stringArrayToNode([1,null,2,3,null,4]), expectedTreeNode);
});
