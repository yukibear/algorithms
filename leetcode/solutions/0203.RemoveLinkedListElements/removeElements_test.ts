import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import removeElements from "./removeElements.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0203. Remove Linked List Elements", () => {
  assertEquals(
    removeElements(CreateListNode([1, 2, 6, 3, 4, 5, 6])!, 6),
    CreateListNode([1, 2, 3, 4, 5])!
  );
});
