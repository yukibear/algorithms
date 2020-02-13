import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import deleteDuplicates from "./deleteDuplicates.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0082. Remove Duplicates from Sorted List II", () => {
  assertEquals(
    deleteDuplicates(createSinglyLinkedListNode([1, 2, 3, 3, 4, 4, 5])),
    createSinglyLinkedListNode([1, 2, 5])
  );
  assertEquals(
    deleteDuplicates(createSinglyLinkedListNode([1, 1, 1, 2, 3])),
    createSinglyLinkedListNode([2, 3])
  );
  assertEquals(deleteDuplicates(createSinglyLinkedListNode([1, 1])), null);
  assertEquals(
    deleteDuplicates(createSinglyLinkedListNode([1])),
    createSinglyLinkedListNode([1])
  );
});
