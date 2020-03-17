import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./isPalindrome.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

Deno.test("0234. Palindrome Linked List", () => {
  assertEquals(isPalindrome(createSinglyLinkedListNode([1, 2])), false);
  assertEquals(isPalindrome(createSinglyLinkedListNode([1, 2, 2, 1])), true);
});
