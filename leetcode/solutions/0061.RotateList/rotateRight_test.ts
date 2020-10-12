import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { CreateListNode, SinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";
import rotateRight from "./rotateRight.ts";


Deno.test("0061. RotateList", () => {
  type test = [[SinglyLinkedListNode<number> | null, number], SinglyLinkedListNode<number> | null]
  const tests: test[] = [
    [
      [CreateListNode([1, 2, 3, 4, 5]), 2],
      CreateListNode([4, 5, 1, 2, 3]),
    ],
    [
      [CreateListNode([1]), 1],
      CreateListNode([1]),
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(rotateRight(...args), want);
  }
});
