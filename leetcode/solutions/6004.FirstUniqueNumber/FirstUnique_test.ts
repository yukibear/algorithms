import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import FirstUnique from "./FirstUnique.ts";

Deno.test("6004. First Unique Number", () => {
  const firstUnique1 = new FirstUnique([2, 3, 5]);
  assertEquals(firstUnique1.showFirstUnique(), 2); // return 2
  firstUnique1.add(5); // the queue is now [2,3,5,5]
  assertEquals(firstUnique1.showFirstUnique(), 2); // return 2
  firstUnique1.add(2); // the queue is now [2,3,5,5,2]
  assertEquals(firstUnique1.showFirstUnique(), 3); // return 3
  firstUnique1.add(3); // the queue is now [2,3,5,5,2,3]
  assertEquals(firstUnique1.showFirstUnique(), -1); // return -1

  const firstUnique2 = new FirstUnique([7, 7, 7, 7, 7, 7]);
  assertEquals(firstUnique2.showFirstUnique(), -1); // return -1
  firstUnique2.add(7); // the queue is now [7,7,7,7,7,7,7]
  firstUnique2.add(3); // the queue is now [7,7,7,7,7,7,7,3]
  firstUnique2.add(3); // the queue is now [7,7,7,7,7,7,7,3,3]
  firstUnique2.add(7); // the queue is now [7,7,7,7,7,7,7,3,3,7]
  firstUnique2.add(17); // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
  assertEquals(firstUnique2.showFirstUnique(), 17); // return 17

  const firstUnique3 = new FirstUnique([809]);
  assertEquals(firstUnique3.showFirstUnique(), 809); // return 809
  firstUnique3.add(809); // the queue is now [809,809]
  assertEquals(firstUnique3.showFirstUnique(), -1); // return -1
});
