import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mergeTwoLists from "./mergeTwoLists.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0021. Merge Two Sorted Lists", () => {
  assertEquals(
    mergeTwoLists(CreateListNode([1, 2, 4]), CreateListNode([1, 3, 4])),
    CreateListNode([1, 1, 2, 3, 4, 4])
  );
  assertEquals(
    mergeTwoLists(CreateListNode([-9, 3]), CreateListNode([5, 7])),
    CreateListNode([-9, 3, 5, 7])
  );
});
