import { TreeNode } from "../../../data_structures/TreeNode.ts";

export default function isSameTree(
  tree1: TreeNode<number> | null,
  tree2: TreeNode<number> | null
): boolean {
  if (!tree1 || !tree2) {
    return tree1 === tree2;
  }
  if (tree1.val !== tree2.val) {
    return false;
  }

  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

