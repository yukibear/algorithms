import { TreeNode } from "../../../data_structures/TreeNode.ts";

export default function searchBST(
  root: TreeNode<number> | null,
  val: number
): TreeNode<number> | null {
  while (root && root.val !== val) {
    root = root.val > val ? root.left : root.right;
  }
  return root;
}
