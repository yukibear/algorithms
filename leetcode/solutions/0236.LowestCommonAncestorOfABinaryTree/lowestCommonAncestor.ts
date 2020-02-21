import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function lowestCommonAncestor(
  root: BinaryTreeNode<number>,
  p: BinaryTreeNode<number>,
  q: BinaryTreeNode<number>
): BinaryTreeNode<number> {
  let result: BinaryTreeNode<number> = { val: -1, left: null, right: null };

  function dfs(node: BinaryTreeNode<number> | null, t1: number, t2: number): number {
    if (!node) {
      return 0;
    }

    if (node.val === t1) {
      if (dfs(node.left, t1, t2) + dfs(node.right, t1, t2) === 1) {
        result = node;

        return 0;
      }

      return 2;
    }

    if (node.val === t2) {
      if (dfs(node.left, t1, t2) + dfs(node.right, t1, t2) === 2) {
        result = node;

        return 0;
      }

      return 1;
    }

    const sum = dfs(node.left, t1, t2) + dfs(node.right, t1, t2);

    if (sum === 3) {
      result = node;

      return 0;
    }

    return sum;
  }

  dfs(root, p.val, q.val);

  return result;
}
