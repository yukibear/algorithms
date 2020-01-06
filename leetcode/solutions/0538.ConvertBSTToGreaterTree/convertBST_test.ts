import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import convertBST from "./convertBST.ts";
import { BinaryTreeNode as BST } from "../../../data_structures/BinaryTreeNode.ts";

test("0538. Convert BST to Greater Tree", () => {
  let tree: BST<number> = {
    val: 5,
    left: { val: 2, left: null, right: null },
    right: { val: 13, left: null, right: null },
  }
  let expected: BST<number> = {
    val: 18,
    left: { val: 20, left: null, right: null },
    right: { val: 13, left: null, right: null },
  }
  assertEquals(convertBST(tree), expected);

  tree = {
    val: 2,
    left: {
      val: 0,
      left: { val: -4, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  }
  expected = {
    val: 5,
    left: {
      val: 6,
      left: { val: 2, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  }
  assertEquals(convertBST(tree), expected);
});
