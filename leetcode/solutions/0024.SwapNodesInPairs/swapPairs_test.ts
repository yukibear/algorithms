import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import swapPairs from "./swapPairs.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0024. Swap Nodes in Pairs", () => {
  assertEquals(
    swapPairs(CreateListNode([1, 2, 3, 4])),
    CreateListNode([2, 1, 4, 3])
  );
});
