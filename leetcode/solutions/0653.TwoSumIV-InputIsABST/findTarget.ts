import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function findTarget(
  root: BinaryTreeNode<number>,
  k: number
): boolean {
  const set = new Set<number>();

  function dfs(node: BinaryTreeNode<number> | null): boolean {
    if (!node) {
      return false;
    }
    if (set.has(k - node.val)) {
      return true;
    }

    set.add(node.val);

    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}
