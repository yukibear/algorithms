import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mergeTwoLists from "./mergeTwoLists.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0021. Merge Two Sorted Lists", () => {
  assertEquals(
    mergeTwoLists(
      createSinglyLinkedListNode([1, 2, 4]),
      createSinglyLinkedListNode([1, 3, 4])
    ),
    createSinglyLinkedListNode([1, 1, 2, 3, 4, 4])
  );
});
