import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function lowestCommonAncestor(
  root: BinaryTreeNode<number>,
  p: BinaryTreeNode<number>,
  q: BinaryTreeNode<number>
): BinaryTreeNode<number> {
  let result: BinaryTreeNode<number> = { val: -1, left: null, right: null };

  function dfs(
    node: BinaryTreeNode<number> | null,
    t1: number,
    t2: number
  ): number {
    if (!node) {
      return 0;
    }

    let sum = 0;

    if (node.val === t1) {
      sum = T1_FOUND;
    } else if (node.val === t2) {
      sum = T2_FOUND;
    }

    sum += dfs(node.left, t1, t2) + dfs(node.right, t1, t2);

    if (sum === T1_FOUND + T2_FOUND) {
      result = node;

      return 0;
    }

    return sum;
  }

  dfs(root, p.val, q.val);

  return result;
}

const T1_FOUND = 1;
const T2_FOUND = 2;
