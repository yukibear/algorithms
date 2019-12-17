import { TreeNode } from "../../../data_structures/TreeNode.ts";

export default function insertIntoBST(
  root: TreeNode<number>,
  val: number
): TreeNode<number> {
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
