import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function bstFromPreorder(
  preorder: number[]
): BinaryTreeNode<number> | null {
  if (preorder.length === 0) {
    return null;
  }

  const root: BinaryTreeNode<number> = {
    val: preorder[0],
    left: null,
    right: null,
  };
  let i = 1;

  while (root.val > preorder[i] && i < preorder.length) {
    i++;
  }

  root.left = bstFromPreorder(preorder.slice(1, i));
  root.right = bstFromPreorder(preorder.slice(i));

  return root;
}
