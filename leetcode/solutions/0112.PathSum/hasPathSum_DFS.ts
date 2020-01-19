import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function hasPathSum(
  node: BinaryTreeNode<number> | null,
  sum: number
): boolean {
  if (!node) return false;

  sum -= node.val;

  if (!node.left && !node.right) {
    return sum === 0;
  }

  return hasPathSum(node.left!, sum) || hasPathSum(node.right!, sum);
}
