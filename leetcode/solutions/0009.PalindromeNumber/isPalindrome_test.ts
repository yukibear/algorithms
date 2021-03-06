import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome, { isPalindrome_Str } from "./isPalindrome.ts";

const createTestFunction = (func: Function) => {
  return () => {
    assertEquals(func(121), true);
    assertEquals(func(-121), false);
    assertEquals(func(10), false);
  };
};
Deno.test("0009. Palindrome Number", createTestFunction(isPalindrome));
Deno.test(
  "0009. Palindrome Number / String conversion ver",
  createTestFunction(isPalindrome_Str)
);
