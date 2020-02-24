import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import swapPairs from "./swapPairs.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0024. Swap Nodes in Pairs", () => {
  assertEquals(
    swapPairs(createSinglyLinkedListNode([1, 2, 3, 4])),
    createSinglyLinkedListNode([2, 1, 4, 3])
  );
});
