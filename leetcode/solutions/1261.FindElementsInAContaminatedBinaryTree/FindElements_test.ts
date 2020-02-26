import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import FindElements from "./FindElements.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

Deno.test("5264. Find Elements in a Contaminated Binary Tree", () => {
  let obj = new FindElements(createBinaryTreeNode([-1, null, -1]));
  assertEquals(obj.find(1), false);
  assertEquals(obj.find(2), true);

  obj = new FindElements(createBinaryTreeNode([-1, -1, -1, -1, -1]));
  assertEquals(obj.find(1), true);
  assertEquals(obj.find(3), true);
  assertEquals(obj.find(5), false);

  obj = new FindElements(createBinaryTreeNode([-1, null, -1, -1, null, -1]));
  assertEquals(obj.find(2), true);
  assertEquals(obj.find(3), false);
  assertEquals(obj.find(4), false);
  assertEquals(obj.find(5), true);
});
