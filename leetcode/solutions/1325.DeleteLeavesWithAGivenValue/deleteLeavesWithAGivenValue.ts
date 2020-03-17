import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function removeLeafNodes(
  root: BinaryTreeNode<number>,
  target: number
): BinaryTreeNode<number> | null {
  function dfs(node: BinaryTreeNode<number> | null): boolean {
    if (!node) {
      return true;
    }

    if (dfs(node.left)) {
      node.left = null;
    }
    if (dfs(node.right)) {
      node.right = null;
    }

    return !node.left && !node.right && node.val === target;
  }

  if (dfs(root) && root.val === target) {
    return null;
  }

  return root;
}
