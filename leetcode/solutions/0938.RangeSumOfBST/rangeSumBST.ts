import { TreeNode as BST } from "../../../data_structures/TreeNode.ts";

export default function rangeSumBST(
  root: BST<number> | null,
  low: number,
  high: number
): number {
  let sum = 0;

  const func = (node: BST<number> | null) => {
    if (!node) {
      return;
    }
    const { left, right } = node;

    if (node.val < low) {
      func(right);
    } else if (node.val > high) {
      func(left);
    } else {
      sum += node.val;
      func(left);
      func(right);
    }
  }

  func(root);
  return sum;
}

