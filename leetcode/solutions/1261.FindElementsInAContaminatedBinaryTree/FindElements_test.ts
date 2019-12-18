import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import FindElements from "./FindElements.ts";
import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("5264. Find Elements in a Contaminated Binary Tree", () => {
  let treeNode: BinaryTreeNode<number> = {
    val: -1,
    left: null,
    right: { val: -1, left: null, right: null },
  }
  let obj = new FindElements(treeNode);
  assertEquals(obj.find(1), false);
  assertEquals(obj.find(2), true);

  treeNode = {
    val: -1,
    left: {
      val: -1,
      left: { val: -1, left: null, right: null },
      right: { val: -1, left: null, right: null },
    },
    right: { val: -1, left: null, right: null },
  }
  obj = new FindElements(treeNode);
  assertEquals(obj.find(1), true);
  assertEquals(obj.find(3), true);
  assertEquals(obj.find(5), false);

  treeNode = {
    val: -1,
    left: null,
    right: {
      val: -1,
      left: {
        val: -1,
        left: { val: -1, left: null, right: null },
        right: null,
      },
      right: null,
    },
  }
  obj = new FindElements(treeNode);
  assertEquals(obj.find(2), true);
  assertEquals(obj.find(3), false);
  assertEquals(obj.find(4), false);
  assertEquals(obj.find(5), true);
});
