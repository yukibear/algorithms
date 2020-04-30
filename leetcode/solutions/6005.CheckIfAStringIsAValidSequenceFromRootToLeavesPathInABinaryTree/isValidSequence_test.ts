import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  BinaryTreeNode,
  createBinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";
import isValidSequence from "./isValidSequence.ts";

Deno.test(
  "6005. Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree",
  () => {
    type args = [BinaryTreeNode<number> | null, number[]];
    type test = [args, boolean];
    const tests: test[] = [
      [
        [
          createBinaryTreeNode([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]),
          [0, 1, 0, 1],
        ],
        true,
      ],
      [
        [
          createBinaryTreeNode([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]),
          [0, 0, 1],
        ],
        false,
      ],
      [
        [
          createBinaryTreeNode([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]),
          [0, 1, 1],
        ],
        false,
      ],
      [[createBinaryTreeNode([8, 3, null, 2, 1, 5, 4]), [8]], false],
      [[createBinaryTreeNode([5]), [5]], true],
      [
        [createBinaryTreeNode([3, 0, null, 2, null, null, 2, 9, 3]), [3, 0]],
        false,
      ],
    ];

    for (const [args, want] of tests) {
      assertEquals(isValidSequence(...args), want);
    }
  }
);
