import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function searchBST(
  root: BinaryTreeNode<number> | null,
  val: number
): BinaryTreeNode<number> | null {
  while (root && root.val !== val) {
    root = root.val > val ? root.left : root.right;
  }

  return root;
}
