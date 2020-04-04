import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import removeElements from "./removeElements.ts";
import { createSinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0203. Remove Linked List Elements", () => {
  assertEquals(
    removeElements(createSinglyLinkedListNode([1, 2, 6, 3, 4, 5, 6])!, 6),
    createSinglyLinkedListNode([1, 2, 3, 4, 5])!
  );
});
