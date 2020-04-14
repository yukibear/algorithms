import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./isPalindrome.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0234. Palindrome Linked List", () => {
  assertEquals(isPalindrome(CreateListNode([1, 2])), false);
  assertEquals(isPalindrome(CreateListNode([1, 2, 2, 1])), true);
});
