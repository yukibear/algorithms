import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import KthLargest from "./KthLargest.ts";

Deno.test("0703. Kth Largest Element in a Stream", () => {
  const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

  assertEquals(kthLargest.add(3), 4);
  assertEquals(kthLargest.add(5), 5);
  assertEquals(kthLargest.add(10), 5);
  assertEquals(kthLargest.add(9), 8);
  assertEquals(kthLargest.add(4), 8);
});
