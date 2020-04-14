import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import middleNode from "./middleNode.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0876. Middle of the Linked List", () => {
  assertEquals(
    middleNode(CreateListNode([1, 2, 3, 4, 5])),
    CreateListNode([3, 4, 5])
  );
  assertEquals(
    middleNode(CreateListNode([1, 2, 3, 4, 5, 6])),
    CreateListNode([4, 5, 6])
  );
});
