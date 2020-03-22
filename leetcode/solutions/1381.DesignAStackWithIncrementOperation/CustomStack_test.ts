import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import CustomStack from "./CustomStack.ts";

Deno.test("1381. Design a Stack With Increment Operation", () => {
  const customStack = new CustomStack(3);
  customStack.push(1);
  customStack.push(2);

  assertEquals(customStack.pop(), 2);

  customStack.push(2);
  customStack.push(3);
  customStack.push(4);
  customStack.increment(5, 100);
  customStack.increment(2, 100);

  assertEquals(customStack.pop(), 103);
  assertEquals(customStack.pop(), 202);
  assertEquals(customStack.pop(), 201);
  assertEquals(customStack.pop(), -1);
});
