import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import deleteDuplicates from "./deleteDuplicates.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0083. Remove Duplicates from Sorted List", () => {
  assertEquals(
    deleteDuplicates(createSinglyLinkedListNode([1, 1, 2])!),
    createSinglyLinkedListNode([1, 2])!
  );
  assertEquals(
    deleteDuplicates(createSinglyLinkedListNode([1, 1, 2, 3, 3])!),
    createSinglyLinkedListNode([1, 2, 3])!
  );
});
