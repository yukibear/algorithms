import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import pathSum from "./pathSum.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

const sorter = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) {
    return arr1.length - arr2.length;
  }

  for (const i of arr1.keys()) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i] - arr2[i];
    }
  }

  return 0;
};

Deno.test("0113. Path Sum II", () => {
  assertEquals(
    pathSum(
      createBinaryTreeNode(
        [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
      )!,
      22
    ).sort(sorter),
    [
      [5, 4, 11, 2],
      [5, 8, 4, 5]
    ].sort(sorter)
  );

  assertEquals(
    pathSum(
      createBinaryTreeNode(
        [1, 2]
      )!,
      1
    ).sort(sorter),
    []
  );

  assertEquals(
    pathSum(
      createBinaryTreeNode(
        [1]
      )!,
      1
    ).sort(sorter),
    [[1]]
  );
});
