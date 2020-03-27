import { BinaryTreeNode } from "../../../datastructure/BinaryTreeNode.ts";

export default function isBalanced(
  node: BinaryTreeNode<number> | null
): boolean {
  if (node == null) return true;

  const left = depth(node.left);
  const right = depth(node.right);

  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(node.left) &&
    isBalanced(node.right)
  );
}

const depth = (node: BinaryTreeNode<number> | null): number => {
  if (node == null) return 0;

  return Math.max(depth(node.left), depth(node.right)) + 1;
};
