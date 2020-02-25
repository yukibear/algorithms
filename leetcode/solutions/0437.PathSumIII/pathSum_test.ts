import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import pathSum from "./pathSum.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

Deno.test("0437. Path Sum III", () => {
  assertEquals(
    pathSum(createBinaryTreeNode([10, 5, -3, 3, 2, 11, 3, -2, null, 1]), 8),
    3
  );
});
