import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function lowestCommonAncestor(
  root: BinaryTreeNode<number> | null,
  p: BinaryTreeNode<number> | null,
  q: BinaryTreeNode<number> | null
): BinaryTreeNode<number> | null {
  if (root === null || p === null || q === null) {
    return null;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
}
