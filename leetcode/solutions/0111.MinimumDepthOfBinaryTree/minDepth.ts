import { TreeNode } from "../../../data_structures/TreeNode.ts";

export default function minDepth(root: TreeNode<number> | null): number {
  return root ? dfs(root) : 0;

  function dfs(node: TreeNode<number> | null): number {
    if (!node) return Infinity;

    const { left, right } = node;
    if (!left && !right) return 1;

    return 1 + Math.min(dfs(left), dfs(right));
  }
}
