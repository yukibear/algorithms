import { TreeNode } from "../../../data_structures/TreeNode.ts";

export default function insertIntoBST(
  root: TreeNode<number> | null,
  val: number
): TreeNode<number> | null {
  let head = root;

  while (head) {
    if (head.val > val) {
      if (!head.left) {
        head.left = { val, left: null, right: null };
        break;
      } else {
        head = head.left;
      }
    } else {
      if (!head.right) {
        head.right = { val, left: null, right: null };
        break;
      } else {
        head = head.right;
      }
    }
  }

  return root;
}
