import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function isValidBST(
  root: BinaryTreeNode<number> | null,
  minVal: number = -Infinity,
  maxVal: number = Infinity
): boolean {
  if (!root) {
    return true;
  }

  if (root.val <= minVal || root.val >= maxVal) {
    return false;
  }

  return isValidBST(root.left, minVal, root.val) &&
    isValidBST(root.right, root.val, maxVal);
}
