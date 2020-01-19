import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { BinaryTreeNode, createBinaryTreeNode } from "./BinaryTreeNode.ts";

test("createTreeNode", () => {
  let expected: BinaryTreeNode<number>;

  assertEquals(createBinaryTreeNode([1]), { val: 1, left: null, right: null });

  expected = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  };
  assertEquals(createBinaryTreeNode([1,2,3]), expected);

  expected = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null }
    }
  };
  assertEquals(createBinaryTreeNode([1, null, 2, null, 3]), expected);

  expected = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 4, left: null, right: null }
    },
    right: {
      val: 3,
      left: null,
      right: null,
    }
  };
  assertEquals(createBinaryTreeNode([1, 2, 3, null, 4]), expected);

  expected = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null },
  }
  assertEquals(createBinaryTreeNode([1, null, 2]), expected);

  expected = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null }
  }
  assertEquals(createBinaryTreeNode([1, 2, 3, 4, 5]), expected);

  expected = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: { val: 4, left: null, right: null },
        right: null,
      },
      right: null,
    }
  }
  assertEquals(createBinaryTreeNode([1, null, 2, 3, null, 4]), expected);
});
