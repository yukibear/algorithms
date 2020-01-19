import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import deleteLeavesWithAGivenValue from "./deleteLeavesWithAGivenValue.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

test("5317. Delete Leaves With a Given Value", () => {
  assertEquals(
    deleteLeavesWithAGivenValue(createBinaryTreeNode([1, 2, 3, 2, null, 2, 4])!, 2),
    createBinaryTreeNode([1, null, 3, null, 4])
  );
  assertEquals(
    deleteLeavesWithAGivenValue(createBinaryTreeNode([1, 3, 3, 3, 2])!, 3),
    createBinaryTreeNode([1, 3, null, null, 2])
  );
});
