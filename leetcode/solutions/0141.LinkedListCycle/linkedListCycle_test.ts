import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasCycle from "./hasCycle.ts";
import ListNode from "../../../data_structures/SinglyLinkedListNode.ts";

test("0141. Linked List Cycle", () => {
  let testList: ListNode = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: {
          val: 4,
        }
      }
    }
  };
  assertEquals(hasCycle(testList, 1), true);

  testList = {
    val: 1,
    next: {
      val:2,
    }
  }
  assertEquals(hasCycle(testList), true);
  assertEquals(hasCycle({ val:1 }), true);
});
