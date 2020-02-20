import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./isPalindrome.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0234. Palindrome Linked List", () => {
  assertEquals(isPalindrome(createSinglyLinkedListNode([1, 2])), false);
  assertEquals(isPalindrome(createSinglyLinkedListNode([1, 2, 2, 1])), true);
});
