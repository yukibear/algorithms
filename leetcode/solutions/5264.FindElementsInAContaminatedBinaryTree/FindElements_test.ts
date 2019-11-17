import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import FindElements from "./FindElements.ts";
import TreeNode from "../../../data_structures/TreeNode.ts";

test("5264. Find Elements in a Contaminated Binary Tree", () => {
  const testValue = "";
  let treeNode: TreeNode = {
    val: -1,
    right: { val: -1 },
  }
  let obj = new FindElements(treeNode);
  assertEquals(obj.find(2), true);
});
