import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import MinStack from "./MinStack.ts";

Deno.test("0155. Min Stack", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  assertEquals(minStack.getMin(), -3);

  minStack.pop();
  assertEquals(minStack.top(), 0);
  assertEquals(minStack.getMin(), -2);
});
