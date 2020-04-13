import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function sumOfLeftLeaves(
  root: BinaryTreeNode<number> | null,
  isLeft: boolean = false
): number {
  if (!root) {
    return 0;
  }

  const { left, right } = root;

  if (isLeft && !left && !right) {
    return root.val;
  }

  return sumOfLeftLeaves(left, true) + sumOfLeftLeaves(right, false);
}
