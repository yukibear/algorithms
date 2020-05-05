import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sortedListToBST from "./sortedListToBST.ts";
import {
  SinglyLinkedListNode,
  CreateListNode,
} from "../../../datastructure/SinglyLinkedListNode.ts";
import {
  BinaryTreeNode,
  createBinaryTreeNode,
} from "../../../datastructure/BinaryTreeNode.ts";

Deno.test("0109. Convert Sorted List to Binary Search Tree", () => {
  type test = [
    SinglyLinkedListNode<number> | null,
    BinaryTreeNode<number> | null
  ];
  const tests: test[] = [
    [CreateListNode([0]), createBinaryTreeNode([0])],
    [CreateListNode([-1, 0, 1]), createBinaryTreeNode([0, -1, 1])],
    [
      CreateListNode([-10, -3, 0, 5, 9]),
      createBinaryTreeNode([0, -10, 5, null, -3, null, 9]),
    ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(sortedListToBST(arg), want);
  }
});
