import { BinaryTreeNode as BST } from "../../../data_structures/BinaryTreeNode.ts";

export default function rangeSumBST(
  node: BST<number> | null,
  low: number,
  high: number
): number {
  if (!node) {
    return 0;
  }

  let sum = 0;
  const { left, right } = node;

  if (node.val < low) {
    sum += rangeSumBST(right, low, high);
  } else if (node.val > high) {
    sum += rangeSumBST(left, low, high);
  } else {
    sum += node.val;
    sum += rangeSumBST(left, low, high) + rangeSumBST(right, low, high);
  }

  return sum;
}

