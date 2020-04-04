import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSymmetric from "./isSymmetric.ts";
import { createBinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0101. Symmetric Tree", () => {
  assertEquals(isSymmetric(createBinaryTreeNode([1, 2, 2, 3, 4, 4, 3])!), true);
  assertEquals(
    isSymmetric(createBinaryTreeNode([1, 2, 2, null, 3, null, 3])!),
    false
  );
});
