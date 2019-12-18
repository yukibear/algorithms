import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function insertIntoBST(
  root: BinaryTreeNode<number> | null,
  val: number
): BinaryTreeNode<number> | null {
  if (!root) {
    return null;
  }

  let node = root;

  while (true) {
    if (node.val > val) {
      if (node.left) {
        node = node.left;
        continue;
      } else {
        node.left = { val, left: null, right: null };
        break;
      }
    } else {
      if (node.right) {
        node = node.right;
        continue;
      } else {
        node.right = { val, left: null, right: null };
        break;
      }
    }
  }

  return root;
}
