import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import rangeSumBST from "./rangeSumBST.ts";
import { TreeNode as BST } from "../../../data_structures/TreeNode.ts";

test("0938. Range Sum of BST", () => {
  [10,5,15,3,7,null,18]
  let tree1: BST<number> = {
    val: 10,
    left: {
      val: 5,
      left: { val: 3, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
    right: {
      val: 15,
      left: null,
      right: { val: 18, left: null, right: null },
    }
  }
  assertEquals(rangeSumBST(tree1, 7, 15), 32);
});
