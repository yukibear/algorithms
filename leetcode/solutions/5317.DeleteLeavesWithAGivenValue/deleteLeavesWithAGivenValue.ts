import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function removeLeafNodes(
  root: BinaryTreeNode<number>,
  target: number
): BinaryTreeNode<number> | null {

  function dfs(node: BinaryTreeNode<number> | null): boolean {
    if (!node) {
      return true;
    }

    const { left, right } = node;

    if (!left && !right && node.val === target) {

      return true;
    }

    let shouldSeeAgain = false;

    if (dfs(left)) {
      node.left = null;
      shouldSeeAgain = true;
    }
    if (dfs(right)) {
      node.right = null;
      shouldSeeAgain = true;
    }

    if (shouldSeeAgain && !node.left && !node.right && node.val === target) {
      return true;
    }

    return false;
  }

  if (dfs(root) === true) {
    if (root.val === target) {
      return null;
    }
  }

  return root;
}
