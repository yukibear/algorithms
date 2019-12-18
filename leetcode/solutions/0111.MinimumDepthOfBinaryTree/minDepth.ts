import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function minDepth(root: BinaryTreeNode<number> | null): number {
  return root ? dfs(root) : 0;

  function dfs(node: BinaryTreeNode<number> | null): number {
    if (!node) return Infinity;

    const { left, right } = node;
    if (!left && !right) return 1;

    return 1 + Math.min(dfs(left), dfs(right));
  }
}
