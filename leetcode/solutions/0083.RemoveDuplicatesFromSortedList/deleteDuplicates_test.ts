import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import deleteDuplicates from "./deleteDuplicates.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0083. Remove Duplicates from Sorted List", () => {
  assertEquals(
    deleteDuplicates(CreateListNode([1, 1, 2])!),
    CreateListNode([1, 2])!
  );
  assertEquals(
    deleteDuplicates(CreateListNode([1, 1, 2, 3, 3])!),
    CreateListNode([1, 2, 3])!
  );
});
