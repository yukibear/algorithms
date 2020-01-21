import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasPathSum_DFS from "./hasPathSum_DFS.ts";
import hasPathSum_BFS from "./hasPathSum_BFS.ts";
import { createBinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

const createTestFunction = (func: Function) => {
  return () => {
    assertEquals(
      func(
        createBinaryTreeNode([
          5,
          4,
          8,
          11,
          null,
          13,
          4,
          7,
          2,
          null,
          null,
          null,
          1
        ]),
        22
      ),
      true
    );
    assertEquals(func(createBinaryTreeNode([1]), 1), true);
    assertEquals(func(createBinaryTreeNode([1, 2]), 1), false);
    assertEquals(func(createBinaryTreeNode([-2, null, -3]), -5), true);
  };
};

test("0112. Path Sum / DFS", createTestFunction(hasPathSum_DFS));
test("0112. Path Sum / BFS", createTestFunction(hasPathSum_BFS));
