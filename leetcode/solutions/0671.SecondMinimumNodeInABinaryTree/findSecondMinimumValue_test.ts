import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findSecondMinimumValue from "./findSecondMinimumValue.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

Deno.test("0671. Second Minimum Node In a Binary Tree", () => {
  assertEquals(
    findSecondMinimumValue(createBinaryTreeNode([2, 2, 5, null, null, 5, 7])!),
    5
  );
  assertEquals(findSecondMinimumValue(createBinaryTreeNode([2, 2, 2])!), -1);
  assertEquals(
    findSecondMinimumValue(
      createBinaryTreeNode(
        [1, 1, 3, 1, 1, 3, 4, 3, 1, 1, 1, 3, 8, 4, 8, 3, 3, 1, 6, 2, 1]
      )!
    ),
    2
  );
});
