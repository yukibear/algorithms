import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function lowestCommonAncestor(
  root: BinaryTreeNode<number>,
  p: BinaryTreeNode<number>,
  q: BinaryTreeNode<number>
): BinaryTreeNode<number> {
  let result: BinaryTreeNode<number> = { val: -1, left: null, right: null };

  function dfs(node: BinaryTreeNode<number> | null): number {
    if (!node) {
      return 0;
    }

    let sum = 0;

    if (node === p || node === q) {
      sum = 1;
    }

    sum += dfs(node.left) + dfs(node.right);

    if (sum === 2) {
      result = node;

      return 0;
    }

    return sum;
  }

  dfs(root);

  return result;
}
