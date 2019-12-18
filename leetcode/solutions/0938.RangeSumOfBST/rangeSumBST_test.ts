import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import rangeSumBST from "./rangeSumBST.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("0938. Range Sum of BST", () => {
  assertEquals(
    rangeSumBST(createBinaryTreeNode([10, 5, 15, 3, 7, null, 18]), 7, 15),
    32
  );
});
