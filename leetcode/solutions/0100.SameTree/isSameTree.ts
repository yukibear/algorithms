import { BinaryTreeNode } from "../../../data_structures/BinaryTreeNode.ts";

export default function isSameTree(
  tree1: BinaryTreeNode<number> | null,
  tree2: BinaryTreeNode<number> | null
): boolean {
  if (!tree1 || !tree2) {
    return tree1 === tree2;
  }
  if (tree1.val !== tree2.val) {
    return false;
  }

  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

