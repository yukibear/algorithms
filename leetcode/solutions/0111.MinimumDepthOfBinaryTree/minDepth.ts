import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function minDepth(root: BinaryTreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  function dfs(node: BinaryTreeNode<number> | null, depth: number): number {
    if (!node) {
      return Infinity;
    }

    depth++;

    const { left, right } = node;

    if (!left && !right) {
      return depth;
    }

    return Math.min(dfs(left, depth), dfs(right, depth));
  }

  return dfs(root, 0);
}
