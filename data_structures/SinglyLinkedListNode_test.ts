import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assertEquals,
  assertStrictEq,
  assertThrows
} from "https://deno.land/std/testing/asserts.ts";
import { createSinglyLinkedListNode, getNthNode } from "./SinglyLinkedListNode.ts";

test("createSinglyLinkedListNode returns a SinglyLinkedListNode by the given array", () => {
  assertEquals(createSinglyLinkedListNode([1, 2, 3, 4, 5, 6, 7]), {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: {
                val: 7,
                next: null
              }
            }
          }
        }
      }
    }
  });
  assertEquals(createSinglyLinkedListNode([1]), {
    val: 1,
    next: null
  });
});

test("createSinglyLinkedListNode returns null if the given array is empty", () => {
  assertEquals(createSinglyLinkedListNode([]), null);
});

test("getNthNode(node, n ) returns the n-th node", () => {
  assertStrictEq(
    getNthNode(createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!, 0).val,
    0
  );
  assertStrictEq(
    getNthNode(createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!, 2).val,
    2
  );
  assertStrictEq(
    getNthNode(createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!, -1).val,
    5
  );
  assertStrictEq(
    getNthNode(createSinglyLinkedListNode([0, 1, 2, 3, 4, 5])!, -3).val,
    3
  );
});
